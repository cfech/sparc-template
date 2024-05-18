#!/bin/bash

# Step 1: Remove the /frontend/dist folder
echo "Removing /frontend/dist folder..."
rm -rf ./frontend/dist

# Step 2: Rebuild the /frontend/dist folder with npm run build
echo "Rebuilding /frontend/dist folder..."
cd ./frontend
npm run build
cd ..

# Step 3: Copy the contents of the frontend/dist folder to the backend/static folder
echo "Copying contents to /backend/static folder..."
cp -r ./frontend/dist/* ./backend/static

echo "Build process completed."