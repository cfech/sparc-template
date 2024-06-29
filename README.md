# Python Flask React Template


## Tech Stack
- Python
- Flask
- React & Typescript
- ShadCN & TailwindCSS
- Docker


## System Requirements
- Python
- Pip
- Node.js
- Npm
- Docker


## Running Locally 
### Installing Dependencies
1. set python configuration
2. install requirements.txt - python dependencies
   - `cd backend`
   - `pip install -r requirements.txt`
3. Install Node Modules for frontend
  - `cd frontend`
  - `npm install`

### Running the App - Micoservices
1. Start the backend - http:\\localhost:5001
   - `cd backend`
   - `python app.py` | `flask run` | `pycharm play button`
2. Start the frontend - http:\\localhost:4049
  - `cd frontend`
  - `npm start`

*cors is configured to allow frontend to access the backend*

### Running the App - Monolith
1. Run the `build-frontend.sh` script
   - `./build-frontend.sh`
   - Will build the frontend and copy the build files to the backend static folder
2. Start the backend - http:\\localhost:5001
   - `cd backend`
   - `python app.py` | `flask run` | `pycharm play button`


### Running the App - Docker
1. Build the docker image
   - `./build-docker.sh`
     - Will build the frontend and copy the build files to the backend static folder
     - Will build the docker image
2. Run the docker image
   - `docker compose up`
   - Will run the app on http:\\localhost:5001
- Note: Inside the docker container the flask app must run on `0.0.0.0`