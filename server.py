from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import pymongo


client = pymongo.MongoClient(
    "mongodb+srv://Server:ODF21Lrh3EFQooDu@smp-iitdh-database.zhcds.gcp.mongodb.net/FAQs?retryWrites=true&w=majority")
FAQSdb = client['FAQs']

Coursesdb = client['Courses']
 
Teamdb = client['Team']

app = Flask(__name__)
cors = CORS(app)

@app.route("/team", methods=['GET'])
def team():
    data = []
    filterData = {'position':'Faculty-in-charge'} 
    for x in Teamdb['ISMP Mentor Team'].find(filterData).sort('name'):
        x['_id'] = str(x['_id'])
        data.append(x)
    filterData = {'position': 'Student Mentor Co-ordinator'}
    for x in Teamdb['ISMP Mentor Team'].find(filterData).sort('name'):
        x['_id'] = str(x['_id'])
        data.append(x)
    filterData = {'position': 'Student Mentor Assistant Co-ordinator'}
    for x in Teamdb['ISMP Mentor Team'].find(filterData).sort('name'):
        x['_id'] = str(x['_id'])
        data.append(x)
    filterData = {'position': 'Student mentor'}
    for x in Teamdb['ISMP Mentor Team'].find(filterData).sort('name'):
        x['_id'] = str(x['_id'])
        data.append(x)
        
    data = json.loads(str(data).replace("'", "\""))
    return jsonify(data)


@app.route("/faq", methods=['GET'])
def faq():
    data = []

    for x in FAQSdb['Questions'].find():
        x['_id'] = str(x['_id'])
        data.append(x)
        
    data = json.loads(str(data).replace("'", "\""))
    return jsonify(data)


@app.route("/Courses", methods=['GET'])
def CSECourses():
    branch = request.args.get('branch')
    sem = request.args.get('sem')
    data = []

    for x in Coursesdb[branch].find({"semester": {"$regex": sem[0]+"|"+sem[1]}}):
        x['_id'] = str(x['_id'])
        data.append(x)

    data = json.loads(str(data).replace("'", "\""))

    return jsonify(data)


@app.route("/CourseDetails", methods=['GET'])
def CourseDetails():
    code = request.args.get('code')
    data = []

    for x in Coursesdb['CSE'].find({"courseCode": code}):
        x['_id'] = str(x['_id'])
        data.append(x)
    if not len(data):
        for x in Coursesdb['EE'].find({"courseCode": code}):
            x['_id'] = str(x['_id'])
            data.append(x)
    if not len(data):
        for x in Coursesdb['MECH'].find({"courseCode": code}):
            x['_id'] = str(x['_id'])
            data.append(x)
    data = json.loads(str(data).replace("'", "\""))
   
    return jsonify(data)



app.run(host="0.0.0.0",debug=True, port="8000")
