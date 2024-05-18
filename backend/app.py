import os

from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='static')
CORS(app)
# cors = CORS(app, resources={r"/*": {"origins": ["http://localhost:4049"]}})

# configure / route to serve the static folders
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path=""):
    print(path)
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/test', methods=['GET'])
def test():
    response = jsonify({'message': 'Hello, World From Flask'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
  app.run(debug=True)
