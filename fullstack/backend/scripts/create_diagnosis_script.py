import requests

# URL of the Flask app's endpoint for creating a user
url = 'http://localhost:5000/api/create_diagnosis'

# JSON data representing the new user
data = {
    "userId": "user001",
    "title": "Diagnosis 1",
    "type": "Type A",
    "date": "2024-05-03",
    "qr_code": "QR_CODE_STRING_3",
    "description": "Description of Diagnosis 1",
    "symptoms": "Symptom 1",
    "advice": "Advice for Diagnosis 1",
    "medicines": [
        {"name": "Medicine A", "link": "https://example.com/medicine-a", "image": "https://example.com/medicine-a.jpg"},
        {"name": "Medicine B", "link": "https://example.com/medicine-b", "image": "https://example.com/medicine-b.jpg"}
    ]
}

# Send a POST request with JSON data
response = requests.post(url, json=data)

# Print the response
print(response.text)
