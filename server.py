from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/faq", methods=['GET'])
def faq():
    f = open('faqs.json', "r")
    data = f.read()
    data = json.loads(data)
    return jsonify(data)

app.run(host="0.0.0.0",debug=True, port="8000")