# Use an official Python image as the base image
FROM python:3.8

# Set the working directory in the container to /app
WORKDIR /hackathon

# Copy the requirements.txt file to the container
COPY requirements.txt .

# Create a virtual environment and install dependencies
RUN python -m venv venv && \
    . venv/bin/activate && \
    pip install -r requirements.txt

# Copy the rest of the application code to the container
COPY . .

# Migrate the Django database
RUN . venv/bin/activate && \
    python manage.py migrate
    
# Start the Django development server
CMD . venv/bin/activate && \
    python manage.py runserver 0.0.0.0:8000
