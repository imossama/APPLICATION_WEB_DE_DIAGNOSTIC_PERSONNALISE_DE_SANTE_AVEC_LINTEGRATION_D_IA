# app/routes.py

from app import app, mongo
from flask import jsonify, request
from app.models import User, Diagnosis
from app.tools.format_json import format_data, extract_data_and_questions
from app.tools.qcm_ai import generate_json_qcm, generate_json_diag
from app.tools.qr_code import generate_qr_code
import json
import datetime

@app.route('/')
def index():
    return '<h1>Backend: Flask | SantIA by OSSAMA ETTAQAFI</h1>'

# Users
@app.route('/api/create_user', methods=['POST'])
def create_user():
    # Check if the request contains JSON data
    if not request.is_json:
        return jsonify({'error': 'Request must be JSON.'}), 400

    # Extract email and password from the request JSON
    email = request.json.get('email')
    password = request.json.get('password')

    # Check if email and password are provided
    if not email or not password:
        return jsonify({'error': 'Email and password are required.'}), 400

    # Create a new user
    new_user = User(email=email, password=password)

    try:
        # Save the user to the database
        new_user.save_to_db()
        
        # Return success message along with the user ID
        return jsonify({'message': 'User created successfully', 'user_id': new_user.id}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/users', methods=['GET'])
def get_users():
    try:
        # Query all users from the 'users' collection in the 'santeia' database
        users = mongo.db.santeia.users.find({}, {'_id': False})

        # Convert users to a list of dictionaries
        user_list = [user for user in users]

        # Return JSON response containing all users
        return jsonify(user_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/user/email/<email>', methods=['GET'])
def get_user_by_email(email):
    try:
        # Query the user with the given ID from the 'users' collection in the 'santeia' database
        user = mongo.db.santeia.users.find_one({'email': email}, {'_id': False})

        # Check if user exists
        if user:
            return jsonify(user), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/user/id/<user_id>', methods=['GET'])
def get_user(user_id):
    try:
        # Query the user with the given ID from the 'users' collection in the 'santeia' database
        user = mongo.db.santeia.users.find_one({'id': user_id}, {'_id': False})

        # Check if user exists
        if user:
            return jsonify(user), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/update_user/<user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        # Check if the request contains JSON data
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        # Extract JSON data from the request
        json_data = request.json

        # Update user information in the database
        updated_count = mongo.db.santeia.users.update_one({'id': user_id}, {'$set': json_data})

        # Check if user exists and has been updated
        if updated_count.modified_count > 0:
            return jsonify({'message': 'User updated successfully'}), 200
        else:
            return jsonify({'error': 'User not found or no changes were made'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
# Diagnosis
@app.route('/api/diagnoses', methods=['GET'])
def get_diagnoses():
    diagnoses = Diagnosis.get_all()
    return jsonify(diagnoses), 200

@app.route('/api/diagnosis/<diagnosis_id>', methods=['GET'])
def get_diagnosis_by_id(diagnosis_id):
    # Call the static method `get_by_id` of the Diagnosis class
    diagnosis = Diagnosis.get_by_id(diagnosis_id)
    
    # Check if a diagnosis with the provided ID exists
    if diagnosis:
        # If the diagnosis is found, return it as a JSON response with status code 200 (OK)
        return jsonify(diagnosis), 200
    else:
        # If the diagnosis is not found, return an error message as a JSON response with status code 404 (Not Found)
        return jsonify({'error': 'Diagnosis not found'}), 404

@app.route('/api/diagnoses/user/<user_id>', methods=['GET'])
def get_diagnoses_by_user(user_id):
    diagnoses = Diagnosis.get_by_user(user_id)
    if diagnoses:
        return jsonify(diagnoses), 200
    else:
        return jsonify({'error': 'No diagnoses found for this user'}), 404
    
@app.route('/api/diagnosis/<diagnosis_id>', methods=['DELETE'])
def delete_diagnosis(diagnosis_id):
    try:
        # Attempt to delete the diagnosis by ID
        deleted_diagnosis = Diagnosis.delete_by_id(diagnosis_id)

        if deleted_diagnosis:
            return jsonify({'message': 'Diagnosis deleted successfully'}), 200
        else:
            return jsonify({'error': 'Diagnosis not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
# Recieve data from the client to treat it with AI and render it to the user
# Route to receive JSON data
@app.route('/api/render_qcm', methods=['POST'])
def render_qcm():
    try:
        # Check if the request contains JSON data
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        # Extract JSON data from the request
        data = format_data(request.json)
            
        print("Received data:", data)

        # Process the JSON data here (perform treatments)
        response = generate_json_qcm(data) 
 
        if response:
            print("Response from conversation interface:", response)
        else:
            print("No response received within the timeout period")

        # Redirect to the route for rendering the processed data
        return jsonify({'qcm': response }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/render_diagnostic', methods=['POST'])
def render_diagnostic():
    try:
        # Check if the request contains JSON data
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        # Extract JSON data from the request
        data = extract_data_and_questions(request.json)
        
        print("Received data:", data)
                    
        # Process the JSON data here (perform treatments)
        response = generate_json_diag(data)
        
        if response:
            # print("Response from conversation interface:", response)
            
            # Parse the string response into a Python dictionary
            response_data = json.loads(response.replace('```json', '').replace('```', ''))['diagnostic']

            print("response_data\n", response_data)

            # Get the current date
            current_date = datetime.datetime.now()

            # Extract diagnosis details from the response
            userId = 'xxxxxxxxx'
            title = response_data.get('titre')
            date = current_date.strftime("%m/%d/%Y")
            description = response_data.get('description')
            symptoms = response_data.get('symptomes')
            advice = response_data.get('conseils')
            medicines = response_data.get('medicaments')
            
            # Create a Diagnosis object
            diagnosis = Diagnosis(userId, title, date, description, symptoms, advice, medicines)
            
            # Save the diagnosis to the database
            if diagnosis.save_to_db():
                print("Diagnosis saved successfully.")
            else:
                print("Failed to save diagnosis.")
                
            saved_diagnosis_data = {
                'titre': diagnosis.title,
                'date': diagnosis.date,
                'qr_code': diagnosis.qr_code,
                'description': diagnosis.description,
                'symptomes': diagnosis.symptoms,
                'conseils': diagnosis.advice,
                'medicaments': diagnosis.medicines
            }

            # Convert the dictionary to JSON
            print('saved_diagnosis_json : =======', saved_diagnosis_data)
        else:
            print("No response received within the timeout period")

        # Redirect to the route for rendering the processed data
        return jsonify({'diagnostic': saved_diagnosis_data }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500