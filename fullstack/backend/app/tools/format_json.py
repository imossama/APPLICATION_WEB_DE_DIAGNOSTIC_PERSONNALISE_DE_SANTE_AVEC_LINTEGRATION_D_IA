def format_data(data_string):
    key_mapping = {
        "fname": "First Name",
        "lname": "Last Name",
        "date": "Date",
        "gender": "Gender",
        "prof": "Profession",
        "prop": "About",
        "medical_conditions": "Medical Conditions",
        "allergies": "Allergies",
        "chirurgies": "Previous surgeries or hospitalizations",
        "histoire": "History of Diseases",
        "physical_symptoms": "Physical Symptoms",
        "mental_symptoms": "Mental Symptoms",
        "question": "Answer of 'How do you feel today?'"
    }
    
    data_dict = dict(item.split(':') for item in data_string.split(','))
    formatted_data = ""
    for key, value in data_dict.items():
        if key.strip('\"') in key_mapping:
            formatted_data += f"{key_mapping[key.strip('\"')]} : {value.strip('\"')}\n"
    return formatted_data
