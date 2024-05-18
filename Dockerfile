# Use an official Python runtime as a parent image
# TODO - use smaller image
FROM python:3.9

# Set the working directory in the container to /app
WORKDIR /app

# Install system-level dependencies for gevent
RUN apt-get update && apt-get install -y \
    libevent-dev \
    gcc \
    python3-dev

# Add the backend directory contents into the container at /app
ADD ./backend /app

# Install any needed packages specified in requirements.txt
RUN pip3 install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Set environment variables
# Flask must run on port 0.0.0.0 inside the container
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5001

# Make port 5001 available to the world outside this container
EXPOSE 5001

# Run app.py when the container launches
# TODO - use gunicorn
CMD ["python", "app.py"]