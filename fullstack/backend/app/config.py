# app/config.py

import os

# MongoDB configuration
MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/santeia'
