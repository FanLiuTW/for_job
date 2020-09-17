from flask import current_app as app
from flask import Flask, request, render_template
import flask
from .models import db, question, officalanswer, studentanswer, category
import base64

"""Root route for render main page"""
@app.route('/')
def hello():
    return render_template('index.html')

"""Route for http request"""
"""Get the category of quiz."""
@app.route('/get_category', methods=['GET'])
def get_category():
    a = category.query.all()
    cate = {}
    for i in a:
        cate[i.majorid] = i.major
    response_data = flask.jsonify ({
        "code": 200,
        "status": "OK",
        "message": "ping successful",
        "data": cate,
    })
    response_data.headers.add("Access-Control-Allow-Origin", "*")
    return response_data, 200

"""Get all question from specific question."""
@app.route('/get_category_question', methods=['POST'])
def get_category_question():
    a = request.json
    q = {}
    for i in question.query.filter_by(majorid = a).all():
        q[i.qid] = i.questiontitle
    response_data = flask.jsonify ({
        "code": 200,
        "status": "OK",
        "message": "ping successful",
        "data": q,
    })
    response_data.headers.add("Access-Control-Allow-Origin", "*")
    return response_data, 200

"""Insert the new question and its answer into db."""
@app.route('/submit_question', methods=['POST'])
def submit_question():
    a = request.form
    q_id = len(question.query.all()) + 1
    major_id = category.query.filter_by(major = a['major']).all()
    new_record_q = question(
        qid = q_id,
        majorid = major_id[0].majorid,
        questiondes = a['des'],
        image = request.files['image'].read(),
        questiontitle = a['title']
    )
    db.session.add(new_record_q)
    db.session.commit()
    new_record_a = officalanswer(
        qid = q_id,
        majorid = major_id[0].majorid,
        answerdes = a['ansdes'],
        image = request.files['image2'].read()
    )
    db.session.add(new_record_a)
    db.session.commit()
    response_data = flask.jsonify ({
        "code": 200,
        "status": "OK",
        "message": "ping successful",
    })
    response_data.headers.add("Access-Control-Allow-Origin", "*")
    return response_data, 200

"""Get the question from specific question id."""
@app.route('/get_question', methods=['POST'])
def get_question():
    a = request.json
    q = question.query.filter_by(qid = a).all()
    if q[0].image != None:
    	res = {'des': q[0].questiondes, 'image': base64.b64encode(q[0].image).decode('utf-8')}
    else:
    	res = {'des': q[0].questiondes, 'image': ""}
    response_data = flask.jsonify ({
        "code": 200,
        "status": "OK",
        "message": "ping successful",
        "data": res,
    })
    response_data.headers.add("Access-Control-Allow-Origin", "*")
    return response_data, 200

"""Get the answer from specific question id."""
@app.route('/get_question_answer', methods=['POST'])
def get_question_answer():
    a = request.json
    q = officalanswer.query.filter_by(qid = a).all()
    if q[0].image != None:
        res = {'answerdes': q[0].answerdes, 'image': base64.b64encode(q[0].image).decode('utf-8')}
    else:
    	res = {'answerdes': q[0].answerdes, 'image': ""}
    response_data = flask.jsonify ({
        "code": 200,
        "status": "OK",
        "message": "ping successful",
        "data": res,
    })
    response_data.headers.add("Access-Control-Allow-Origin", "*")
    return response_data, 200

    
