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
    # if email already exists in the db, registration error
    if User.query.filter_by(email=user_data['email']).first():
        return 'This email is already linked with an account', 409
    # if username already exists in the db, registration error
    if User.query.filter_by(username=user_data['username']).first():
        return 'Username is taken', 409
        
    passwd_hash = generate_password_hash(user_data['password'])
    new_user = User(email=user_data['email'], username=user_data['username'], first_name=user_data['first_name'], last_name=user_data['last_name'], password_hash=passwd_hash)

    db.session.add(new_user)
    db.session.commit()

    return 'Success', 201

@main.route('/login', methods=['GET', 'POST'])
def login_user():
    users = []

    return jsonify({'users': users})

# @main.route('/journal', methods=['GET', 'POST'])
# def get_journal():

@main.route('/getNewestUser', methods = ['GET']) 
def get_newest_user():

    user_sql = User.query.order_by(User.date_created.desc()).first()
    user = {'username' : user_sql.username, 'email' : user_sql.email, 'first_name' : user_sql.first_name, 'last_name' : user_sql.last_name, 'date_created' : user_sql.date_created}

    return jsonify({'newestUser': user})