from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# cors = CORS(app, resources={r"/*": {"origins": ["http://localhost:4049"]}})

@app.route('/test', methods=['GET'])
def test():
    response = jsonify({'message': 'Hello, World From Flask'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
  app.run(debug=True)
