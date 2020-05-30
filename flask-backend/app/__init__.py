# non-local imports
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_cors import CORS

# local imports
#from instance.config import app_config

# initialize database
db = SQLAlchemy()

login_manager = LoginManager()

def create_app():

    app = Flask(__name__)
    app.config['SQLALCHEMY_ECHO'] = True
    app.config['SECRET_KEY'] = 'p9Bv<3Eid9%$i01'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://Mindify_Admin:Mindify404@localhost/mindify_db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)

    from .views import main
    app.register_blueprint(main)

    db.init_app(app)

    login_manager.init_app(app)
    #login_manager.login_message = "You must be logged in to access this page."
    login_manager.login_view = "login"
    migrate = Migrate(app, db) # allows us to run migrations using Flask-Migrate
    CORS(app)
    #from app import models

    return app