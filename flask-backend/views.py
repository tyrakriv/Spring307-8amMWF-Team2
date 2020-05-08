from flask import Blueprint, jsonify, render_template, request
from werkzeug.security import generate_password_hash, check_password_hash

from . import db
from .models import User


main = Blueprint('main', __name__)

@main.route('/home')
@main.route('/')
def home():
    return render_template('home.html', title='Home')

@main.route('/register', methods=['POST'])
def register_user():
    user_data = request.get_json()
    # user = User.query
    passwd_hash = generate_password_hash(user_data['password'])
    new_user = User(email=user_data['email'], username=user_data['username'], first_name=user_data['first_name'], last_name=user_data['last_name'], password_hash=passwd_hash)

    db.session.add(new_user)
    db.session.commit()

    return 'Done', 201

@main.route('/login', methods=['GET', 'POST'])
def login_user():
    users = []

    return jsonify({'users': users})

# @main.route('/journal', methods=['GET', 'POST'])
# def get_journal():

