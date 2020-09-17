from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS



db = SQLAlchemy()
migrate = Migrate()


def create_app():
    """Construct the core application."""
    app = Flask(__name__, instance_relative_config=False, template_folder='templates')
    cors = CORS(app)
    app.config.from_object('config.Config')
    
    """Initialize the flask appp and db migrate"""
    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from . import routes  # Import routes
        from . import models  # Import db models
        db.create_all()       # Create sql tables for our data models
        
        return app