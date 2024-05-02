# app/routes.py

from app import app, mongo
from flask import jsonify, request
from app.models import User, Diagnosis
from bson import ObjectId

@app.route('/')
def index():
    return 'SanteIA, Backend!'

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
@app.route('/api/create_diagnosis', methods=['POST'])
def create_diagnosis():
    try:
        # Check if the request contains JSON data
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        # Extract data from the request JSON
        data = request.json

        # Create a new Diagnosis object
        new_diagnosis = Diagnosis(**data)

        # Save the diagnosis to the database
        new_diagnosis.save_to_db()

        return jsonify({'message': 'Diagnosis created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
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
@app.route('/api/receive_json', methods=['POST'])
def receive_json():
    try:
        # Check if the request contains JSON data
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON.'}), 400

        # Extract JSON data from the request
        json_data = request.json

        # You can now access and use the JSON data as needed
        # For example, you can print the JSON data
        print("Received JSON data:", json_data)

        # Process the JSON data here (perform treatments)

        # Redirect to the route for rendering the processed data
        return jsonify({'message': 'JSON data received successfully',
                        'redirect_url': '/api/render_data'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route to render the processed data
@app.route('/api/render_data', methods=['GET'])
def render_data():
    try:
        # Perform any additional processing or treatments here

        # Create data to render (example)
        processed_data = {'result': 'Some processed data'}

        # Return the processed data as JSON
        return jsonify(processed_data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500