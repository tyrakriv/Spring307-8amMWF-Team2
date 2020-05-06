# non-local imports
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate

# local imports
from config import app_config
import templates

# initialize database
db = SQLAlchemy()

login_manager = LoginManager()

def create_app(config_name):

    app = Flask("__main__", template_folder="templates")
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)

    login_manager.init_app(app)
    login_manager.login_message = "You must be logged in to access this page."
    login_manager.login_view = "auth.login"

    
    migrate = Migrate(app, db) # allows us to run migrations using Flask-Migrate
    from app import models
    
    return app