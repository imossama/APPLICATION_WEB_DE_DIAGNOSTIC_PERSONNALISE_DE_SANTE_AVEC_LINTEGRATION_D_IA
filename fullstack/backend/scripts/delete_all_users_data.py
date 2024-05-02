from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('localhost', 27017)  # Update with your MongoDB connection details
db = client['santeia']  # Update with your database name
collection = db['santeia.users']  # Update with your collection name

# Delete all documents from the collection
result = collection.delete_many({})

# Print the result
print(f"Deleted {result.deleted_count} documents from the collection.")
