from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import pymongo


client = pymongo.MongoClient(
    "mongodb+srv://Server:ODF21Lrh3EFQooDu@smp-iitdh-database.zhcds.gcp.mongodb.net/FAQs?retryWrites=true&w=majority")
db = client['FAQs']


app = Flask(__name__)
cors = CORS(app)

@app.route("/faq", methods=['GET'])
def faq():
    data = []

    for x in db['Questions'].find():
        x['_id'] = str(x['_id'])
        data.append(x)
        
    data = json.loads(str(data).replace("'", "\""))
    return jsonify(data)

app.run(host="0.0.0.0",debug=True, port="8000")
