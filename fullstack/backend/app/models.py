# app/models.py

# from app import mongo
import os
import shortuuid
from pymongo import MongoClient
from app.tools.qr_code import generate_qr_code

mongo_uri = os.getenv('MONGO_URI')
client = MongoClient(mongo_uri)
db = client['test']
mongo = db  # Set the `mongo` object to the database instance

class User:
    def __init__(self, email, password):
        self.id = shortuuid.uuid()
        self.email = email
        self.password = password

    def save_to_db(self):
        user_data = {
            'id': self.id,
            'email': self.email,
            'password': self.password
        }
        # Save the user data into the 'users' collection in the 'santeia' database
        mongo.db.users.insert_one(user_data)

class Personal:
    def __init__(self, userId, first_name, last_name, date, gender, profession, about):
        self.id = userId
        self.first_name = first_name
        self.last_name = last_name
        self.date = date
        self.gender = gender
        self.profession = profession
        self.about = about

    def save_to_db(self):
        personal_data = {
            'userId': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'date': self.date,
            'gender': self.gender,
            'profession': self.profession,
            'about': self.about
        }

        # Check if the userId already exists in the database
        existing_data = mongo.db.personal.find_one({'userId': self.id})

        if existing_data:
            # Update the existing record
            mongo.db.personal.update_one({'userId': self.id}, {'$set': personal_data})
        else:
            # Insert a new record
            mongo.db.personal.insert_one(personal_data)

class Diagnosis:
    def __init__(self, userId, title, date, description, symptoms, advice, medicines):
        self.id = shortuuid.uuid()
        self.userId = userId
        self.title = title
        self.date = date
        self.description = description
        self.symptoms = symptoms
        self.advice = advice
        self.medicines = medicines
                
        self.qr_code = generate_qr_code(self.__dict__)

    def save_to_db(self):
        try:
            # Insert the diagnosis document into the 'diagnoses' collection
            mongo.db.diagnoses.insert_one(self.__dict__)
            return True
        except Exception as e:
            print("An error occurred while saving to database:", e)
            return False

    @staticmethod
    def get_by_user(userId):
        try:
            # Query diagnoses by userId from the 'diagnoses' collection
            diagnoses = mongo.db.diagnoses.find({'userId': userId}, {'_id': False})
            return list(diagnoses)
        except Exception as e:
            print("An error occurred while fetching from database:", e)
            return []

    @staticmethod
    def get_by_id(diagnosis_id):
        try:
            # Query a diagnosis by ID from the 'diagnoses' collection
            diagnosis = mongo.db.diagnoses.find_one({'id': diagnosis_id}, {'_id': False})
            return diagnosis
        except Exception as e:
            print("An error occurred while fetching from database:", e)
            return None
        
    @staticmethod
    def get_all():
        try:
            # Query all diagnoses from the 'diagnoses' collection
            diagnoses = mongo.db.diagnoses.find({}, {'_id': False})
            return list(diagnoses)
        except Exception as e:
            print("An error occurred while fetching from database:", e)
            return []

    @staticmethod
    def delete_by_id(diagnosis_id):
        try:
            # Attempt to delete the diagnosis by its ID
            result = mongo.db.diagnoses.delete_one({'id': diagnosis_id})

            # Check if the deletion was successful
            if result.deleted_count > 0:
                return True  # Diagnosis deleted successfully
            else:
                return False  # Diagnosis not found
        except Exception as e:
            print("An error occurred while deleting from database:", e)
            return False  # Error occurred during deletion