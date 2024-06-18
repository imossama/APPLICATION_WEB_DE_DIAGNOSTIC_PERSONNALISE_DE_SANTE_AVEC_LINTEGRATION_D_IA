import os
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__, static_folder='../public', static_url_path='/public')
CORS(app)
CORS(app, origins=["http://localhost:5173/"])

# Load configuration from config.py
app.config.from_object('app.config')

# Initialize PyMongo with the MongoDB URI from the environment variable
mongo_uri = os.getenv('MONGO_URI')
mongo = PyMongo(app, uri=mongo_uri)

def test_mongodb_connection():
    try:
        # Attempt to ping the MongoDB server to test the connection
        mongo.db.command('ping')
        print("[Message: Success] Connected to MongoDB")
    except Exception as e:
        print("[Message: Error] Failed to connect to MongoDB:", e)

def create_collections():
    try:
        # Create 'users' collection
        mongo.db.create_collection('users')
        print("[Message: Success] 'users' collection created")

        # Create 'diagnosis' collection
        mongo.db.create_collection('diagnosis')
        print("[Message: Success] 'diagnosis' collection created")

        # Create 'personal' collection
        mongo.db.create_collection('personal')
        print("[Message: Success] 'personal' collection created")
    except Exception as e:
        print("[Message: Error] Failed to create collections:", e)

# Test MongoDB connection and create collections
test_mongodb_connection()
create_collections()

from app import routes
