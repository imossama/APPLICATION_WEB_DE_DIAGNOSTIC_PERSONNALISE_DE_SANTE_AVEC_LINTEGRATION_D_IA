# Set environment variables with your Gemini project ID and API key
import os
os.environ['GEMINAI_PROJECT_ID'] = 'gen-lang-client-0213894924'
os.environ['GEMINAI_API_KEY'] = 'AIzaSyAOzKV6kGbFrsFmzZsqyoboAl_ZZy8X56c'

# Import and create the model (no access_token argument)
import google.generativeai as genai

model = genai.GenerativeModel('gemini-1.0')

prompt = "Write a short poem about nature."

response = model.generate_content(prompt)
print(response.text)