from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__, static_folder='../public', static_url_path='/public')
CORS(app)
CORS(app, origins=["http://localhost:5173"])

# Load configuration from config.py
app.config.from_object('app.config')

# Initialize PyMongo
mongo = PyMongo(app, uri=app.config['MONGO_URI'])

def test_mongodb_connection():
    try:
        # Attempt to ping the MongoDB server to test the connection
        mongo.cx.admin.command('ping')
        print("[Message: Success] Connected to MongoDB")
    except Exception as e:
        print("[Message: Echec] Failed to connect to MongoDB:", e)

test_mongodb_connection()

from app import routes
