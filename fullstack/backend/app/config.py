# app/config.py

import os
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

# MongoDB configuration
MONGO_URI = os.getenv('MONGO_URI')
