import requests

# URL of the Flask app's endpoint for creating a user
url = 'http://localhost:5000/api/create_user'

# JSON data representing the new user
data = {
    'email': 'example@email.com',
    'password': 'password123'
}

# Send a POST request with JSON data
response = requests.post(url, json=data)

# Print the response
print(response.text)
