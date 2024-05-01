# app/models.py

from app import mongo
from bson.objectid import ObjectId
import shortuuid
import qrcode

# Define a function to generate and save QR code
def generate_qr_code(diagnosis_id):
    # Generate the QR code data
    qr_data = f"Your QR code data here: {diagnosis_id}"

    # Create a QR code instance
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(qr_data)
    qr.make(fit=True)

    # Generate the QR code image
    qr_img = qr.make_image(fill_color="black", back_color="white")

    # Define the path to save the QR code image
    qr_code_path = os.path.join("public", "qr_code", f"{diagnosis_id}.png")

    # Save the QR code image to the specified path
    qr_img.save(qr_code_path)

    return qr_code_path

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
        mongo.db.santeia.users.insert_one(user_data)

class Diagnosis:
    def __init__(self, userId, title, type, date, qr_code, description, symptoms, advice, medicines):
        self.id = shortuuid.uuid()
        self.userId = userId
        self.title = title
        self.type = type
        self.date = date
        self.qr_code = qr_code
        self.description = description
        self.symptoms = symptoms
        self.advice = advice
        self.medicines = medicines

    def save_to_db(self):
        try:
            # Generate and save the QR code
            qr_code_path = generate_qr_code(self.id)

            # Update the qr_code field with the path to the saved QR code image
            self.qr_code = qr_code_path

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
            result = mongo.db.diagnoses.delete_one({'_id': diagnosis_id})

            # Check if the deletion was successful
            if result.deleted_count > 0:
                return True  # Diagnosis deleted successfully
            else:
                return False  # Diagnosis not found
        except Exception as e:
            print("An error occurred while deleting from database:", e)
            return False  # Error occurred during deletion