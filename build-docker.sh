#!/bin/bash

# Step 1: Run the build-frontend.sh script
echo "Running build-frontend.sh..."
./build-frontend.sh

## Step 2: Build the Docker image
echo "Building Docker image..."
docker build -t sparc-template .

echo "Docker file build, you can run this locally with docker-compose up."