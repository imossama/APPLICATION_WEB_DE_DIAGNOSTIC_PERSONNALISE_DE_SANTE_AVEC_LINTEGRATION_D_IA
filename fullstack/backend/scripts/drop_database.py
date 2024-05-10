from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('localhost', 27017)  # Update with your MongoDB connection details

# Specify the name of the database to delete
db_name = 'santeia'  # Update with your database name

# Delete the specified database
client.drop_database(db_name)

print(f"The database '{db_name}' has been deleted.")
