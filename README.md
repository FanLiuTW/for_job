# Simple web application for quiz page (Developed by React and Flask)
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
The structure of project:
```bash
├── application
│   ├── __pycache__
│   │   
│   ├── static (frontend bundle)
│   ├── templates (frontend views)
│   ├── __init__.py 
│   ├── models.py (db models)
│   │   
│   └── route.py (main route)
├── __pycache__
├── env 
├── migrations (for local db version control)
├── .env (environment variable setting)
├── Procfile (Heroku starting file set up )
├── README.md
├── config.py (configurate the env)
├── requirements.txt (install package use)
├── .gitignore
├── runtime.txt
└── wsgi.py (starting file)
```
	
## Technologies
Project is created with:
* Python Flask
* React

The page has two main component, category of question and manage.
Mange provide a simple interface for teacher to submit new question.
Question will display in list and click to show the description.

All the element is dynamic, like category, question, description of question.
If you need to alter it, just manipulate the datebase, all the element is rely on database.

The frontend code already packed into bundel.js and you can check the oringin code,
it all inside frontend dir.
	
## Setup
To run this project, install it locally using npm:

```
$ cd for_job
$ flask run

```
Or you can see the demo on Heroku: (#https://forjob.herokuapp.com)
