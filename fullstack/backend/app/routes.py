# app/routes.py

import os
import logging
from app import app, mongo
from pymongo import MongoClient
from flask import jsonify, request
from app.models import User, Diagnosis, Personal
from app.tools.format_json import format_data, extract_data_and_questions
from app.tools.qcm_ai import generate_json_qcm, generate_json_diag

# Set up logging
logging.basicConfig(level=logging.ERROR)

# Configuration de la connexion à MongoDB Atlas
mongo_uri = os.getenv('MONGO_URI')

# Check if the MongoDB URI is provided
if not mongo_uri:
    logging.error('MongoDB URI is not provided.')
    raise ValueError('MongoDB URI is not provided.')

try:
    # Connect to MongoDB
    client = MongoClient(mongo_uri)
    db = client['test']
    mongo = db  # Set the `mongo` object to the database instance
except Exception as e:
    logging.error('Failed to connect to MongoDB: %s', str(e))
    raise ValueError('Failed to connect to MongoDB.')

@app.route('/')
def index():
    return '<h1>Backend server is online!</h1>'

# Users
@app.route('/api/create_user', methods=['POST'])
def create_user():
    try:
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        email = request.json.get('email')
        password = request.json.get('password')

        if not email or not password:
            return jsonify({'error': 'Email and password are required.'}), 400

        new_user = User(email=email, password=password)
        new_user.save_to_db()

        return jsonify({'message': 'User created successfully', 'user_id': new_user.id}), 201
    except Exception as e:
        logging.error('An error occurred while creating a user: %s', str(e))
        return jsonify({'error': 'Failed to create user'}), 500
        
@app.route('/api/users', methods=['GET'])
def get_users():
    try:
        users = mongo.db.users.find({}, {'_id': False})
        user_list = [user for user in users]
        return jsonify(user_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/user/email/<email>', methods=['GET'])
def get_user_by_email(email):
    try:
        user = mongo.db.users.find_one({'email': email}, {'_id': False})
        if user:
            return jsonify(user), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/user/id/<user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user = mongo.db.users.find_one({'id': user_id}, {'_id': False})
        if user:
            return jsonify(user), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/update_user/<user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        json_data = request.json
        updated_count = mongo.db.users.update_one({'id': user_id}, {'$set': json_data})

        if updated_count.modified_count > 0:
            return jsonify({'message': 'User updated successfully'}), 200
        else:
            return jsonify({'error': 'User not found or no changes were made'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
 
@app.route('/api/delete_user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        deletion_result = mongo.db.users.delete_one({'id': user_id})
        if deletion_result.deleted_count > 0:
            return jsonify({'message': 'User deleted successfully'}), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Personal
@app.route('/api/create_personal', methods=['POST'])
def create_personal():
    if not request.is_json:
        return jsonify({'error': 'Request must be JSON.'}), 400

    personal_data = request.json

    if not personal_data:
        return jsonify({'error': 'Personal data is required.'}), 400

    userId = personal_data.get('userId')
    first_name = personal_data.get('first_name')
    last_name = personal_data.get('last_name')
    date = personal_data.get('date')
    gender = personal_data.get('gender')
    profession = personal_data.get('profession')
    about = personal_data.get('about')

    if not userId or not first_name or not last_name:
        return jsonify({'error': 'User ID, first name, and last name are required.'}), 400

    new_personal = Personal(
        userId=userId,
        first_name=first_name,
        last_name=last_name,
        date=date,
        gender=gender,
        profession=profession,
        about=about
    )

    try:
        new_personal.save_to_db()
        return jsonify({'message': 'Personal data created successfully', 'userId': userId}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500
   
@app.route('/api/get_personal/<userId>', methods=['GET'])
def get_personal(userId):
    personal_data = mongo.db.personal.find_one({'userId': userId})
    if personal_data:
        personal_data['_id'] = str(personal_data['_id'])
        return jsonify(personal_data), 200
    else:
        return jsonify({'error': 'Personal data not found for userId: {}'.format(userId)}), 404

# Diagnosis
@app.route('/api/diagnoses', methods=['GET'])
def get_diagnoses():
    diagnoses = Diagnosis.get_all()
    return jsonify(diagnoses), 200

@app.route('/api/diagnosis/<diagnosis_id>', methods=['GET'])
def get_diagnosis_by_id(diagnosis_id):
    diagnosis = Diagnosis.get_by_id(diagnosis_id)
    if diagnosis:
        return jsonify(diagnosis), 200
    else:
        return jsonify({'error': 'Diagnosis not found'}), 404

@app.route('/api/diagnoses/user/<user_id>', methods=['GET'])
def get_diagnoses_by_user(user_id):
    diagnoses = Diagnosis.get_by_user(user_id)
    if diagnoses:
        return jsonify(diagnoses), 200
    else:
        return jsonify({'error': 'No diagnoses found for this user'}), 404
    
@app.route('/api/delete/diagnosis/<diagnosis_id>', methods=['DELETE'])
def delete_diagnosis(diagnosis_id):
    try:
        deleted_diagnosis = Diagnosis.delete_by_id(diagnosis_id)
        if deleted_diagnosis:
            return jsonify({'message': 'Diagnosis deleted successfully'}), 200
        else:
            return jsonify({'error': 'Diagnosis not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
# Receive data from the client to treat it with AI and render it to the user
# Route to receive JSON data
@app.route('/api/render_qcm', methods=['POST'])
def render_qcm():
    try:
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        data = format_data(request.json)
        response = generate_json_qcm(data) 
 
        if response:
            return jsonify({'qcm': response }), 200
        else:
            return jsonify({'error': 'No response received within the timeout period'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/render_diagnostic', methods=['POST'])
def render_diagnostic():
    try:
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        data = extract_data_and_questions(request.json)
        userId = request.json.get('userId')
                    
        response = generate_json_diag(data)
        
        if response:
            response_data = json.loads(response.replace('```json', '').replace('```', ''))['diagnostic']
            current_date = datetime.datetime.now()
            userId = userId
            title = response_data.get('title')
            date = current_date.strftime("%m/%d/%Y")
            description = response_data.get('description')
            symptoms = response_data.get('symptoms')
            advice = response_data.get('advice')
            medicines = response_data.get('medicines')
            
            diagnosis = Diagnosis(userId, title, date, description, symptoms, advice, medicines)
            
            if diagnosis.save_to_db():
                saved_diagnosis_data = {
                    'id' : diagnosis.id,
                    'title': diagnosis.title,
                    'date': diagnosis.date,
                    'qr_code': diagnosis.qr_code,
                    'description': diagnosis.description,
                    'symptoms': diagnosis.symptoms,
                    'advice': diagnosis.advice,
                    'medicines': diagnosis.medicines
                }
                return jsonify({'diagnostic': saved_diagnosis_data }), 200
            else:
                return jsonify({'error': 'Failed to save diagnosis'}), 500
        else:
            return jsonify({'error': 'No response received within the timeout period'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500
