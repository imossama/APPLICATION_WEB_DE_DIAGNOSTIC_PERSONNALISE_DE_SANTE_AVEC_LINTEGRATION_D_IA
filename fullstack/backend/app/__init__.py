# app/__init__.py

from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_object('app.config')

mongo = PyMongo(app)

def test_mongodb_connection():
    try:
        mongo.db.command('ping')
        print("[Message: Success] Connected to MongoDB")
    except Exception as e:
        print("[Message: Echec] Failed to connect to MongoDB:", e)

test_mongodb_connection()

from app import routes
