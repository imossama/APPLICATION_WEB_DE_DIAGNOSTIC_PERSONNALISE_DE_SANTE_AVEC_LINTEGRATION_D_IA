FROM python:3.11

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app runs on
EXPOSE 8080

# Set the environment variable
ENV FLASK_APP=run.py

# Command to run the Flask application
CMD [ "flask", "run", "--host=0.0.0.0", "--port=8080" ]
