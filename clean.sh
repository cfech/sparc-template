#!/bin/bash

# Navigate to the frontend directory and remove the dist folder
cd frontend
rm -rf dist

# Navigate to the backend directory and remove the static folder
cd ../backend
rm -rf static
mkdir static

# Navigate back to the root directory
cd ..

echo "Cleaned frontend and backend directories."