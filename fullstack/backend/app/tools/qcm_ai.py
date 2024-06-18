import google.generativeai as genai

genai.configure(api_key="AIzaSyA9djg8Q3cnHw6fx7r2PV2fENTpHSgiPMY")

# Set up the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 8192,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

convo = model.start_chat(history=[
])

import time

def wait_for_response(convo, timeout=60):
    start_time = time.time()
    while True:
        if convo.last.text:
            return convo.last.text
        elif time.time() - start_time > timeout:
            print("Timeout occurred while waiting for response from conversation interface")
            return None
        else:
            print("Waiting for response from conversation interface...")
            time.sleep(5)  # Attendez 5 secondes avant de réessayer

def generate_json_qcm(data):    
    # Define the message to send
    message = ("Depuis ces données :\n" + data + "\nCréez un questionnaire à choix multiples (QCM) de 20 questions pour évaluer la santé physique ou mentale de l'utilisateur, ou les deux, en se basant sur les données fournies. Les questions devraient couvrir divers aspects de la santé, y compris les symptômes physiques, les habitudes de vie et le bien-être émotionnel. Chaque question devrait offrir cinq niveaux de réponse, allant de 'Fortement d'accord' à 'Fortement en désaccord' (de 1 à 5). Les réponses doivent être au format JSON, incluant un ID de question, la question elle-même et les options de réponse. Le JSON doit être formaté sur une seule ligne pour une conversion facile de la chaîne de caractères au JSON. Le format JSON requis est le suivant :" 
            '{ "nombre":{"question":......,"reponses":[réponses]} }')

    # Send the message to the conversation
    convo.send_message(message)

    return wait_for_response(convo)
  
def generate_json_diag(data):    
    # Define the message to send
    message = (
        "À partir de ces données : "
        + data
        + "\nGénérer un JSON contenant les informations de diagnostic, structurées comme suit : "
        + "Description détaillée du diagnostic, symptômes, conseils basés sur le diagnostic, "
        + "et des médicaments recommandés (nom du médicament, et lien vers des informations supplémentaires). "
        + "Assurez-vous que le JSON est correctement formaté et que toutes les informations nécessaires sont incluses avec précision. "
        + "Le JSON doit être sur une seule ligne pour faciliter la conversion de String à JSON. "
        + "De plus, l'IA doit rechercher sur internet les médicaments nécessaires pour les symptômes spécifiques, "
        + "récupérer les données pertinentes (nom, lien) et les inclure dans le JSON généré. "
        + "Les données générées doivent être brèves. Le format JSON requis est le suivant : "
        + '{ "diagnostic": {"title": "", "description": "", "symptoms": "", "advice": "", "medicines": []} }'
    )

    # Send the message to the conversation
    convo.send_message(message)

    return wait_for_response(convo)