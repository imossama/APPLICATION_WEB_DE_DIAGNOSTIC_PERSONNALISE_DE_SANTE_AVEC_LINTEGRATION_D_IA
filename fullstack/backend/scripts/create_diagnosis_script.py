import requests

# URL of the Flask app's endpoint for creating a user
url = 'http://localhost:5000/api/create_diagnosis'

# JSON data representing the new user
data = {
    "userId": "user456",
    "title": "Diagnosis 3",
    "type": "Type C",
    "date": "2024-05-03",
    "qr_code": "QR_CODE_STRING_3",
    "description": "Description of Diagnosis 3",
    "symptoms": ["Symptom 5", "Symptom 6"],
    "advice": "Advice for Diagnosis 3",
    "medicines": [
        {"name": "Medicine E", "link": "https://example.com/medicine-e", "image": "https://example.com/medicine-e.jpg"},
        {"name": "Medicine F", "link": "https://example.com/medicine-f", "image": "https://example.com/medicine-f.jpg"}
    ]
}

# Send a POST request with JSON data
response = requests.post(url, json=data)

# Print the response
print(response.text)
