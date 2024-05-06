import json

key_descriptions = {
    "fname": "Prénom",
    "lname": "Nom de famille",
    "date": "Date de naissance",
    "gender": "Genre",
    "prof": "Profession",
    "prop": "Biographie personnelle",
    "medical_conditions": "Conditions médicales",
    "allergies": "Allergies",
    "chirurgies": "Chirurgies ou hospitalisations antérieures",
    "histoire": "Antécédents médicaux",
    "physical_symptoms": "Symptômes physiques",
    "mental_symptoms": "Symptômes mentaux",
    "question": "Réponse à 'Comment vous sentez-vous aujourd'hui ?'"
}

def format_data(data_string):
    data_dict = json.loads(data_string)
    formatted_data = ""
    for key, value in data_dict.items():
        key_stripped = key.strip('\"')
        if key_stripped in key_descriptions:
            formatted_data += f"{key_descriptions[key_stripped]} : {value.strip('\"')}\n"
    return formatted_data

def extract_data_and_questions(json_string):
    data = json.loads(json_string)
    
    extracted_data = ""
    for key, value in data.items():
        if key == 'qcm':
            extracted_data += extract_questions_and_answers(json.dumps(value))
        else:
            description = key_descriptions.get(key, key)
            extracted_data += f"{description}: {value}\n"
    
    return extracted_data

def extract_questions_and_answers(qcm_json_string):
    qcm_data = json.loads(qcm_json_string)
    formatted_output = ""
    for key, value in qcm_data.items():
        question = value.get('question', '')
        answer = value.get('answer', '')
        formatted_output += f"Question {key}: {question} - Réponse: {answer}\n"
    return formatted_output
