# nonlocal imports
from flask import Blueprint, jsonify, render_template, request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import current_user, login_user, logout_user
# local
from . import db, login_manager
from .models import User, Journal


main = Blueprint('main', __name__)

@main.route('/home')
@main.route('/')
def home():
    return render_template('home.html', title='Home')

""" ************************* Registration View ******************************* """
@main.route('/register', methods=['GET', 'POST'])
def register_user():
    user_data = request.get_json()
    # user = User.query
    # if '@' in user_data['username']:
    #     return "May not have '@' symbol in username", 409
    # if email already exists in the db, registration error
    if User.query.filter_by(email=user_data['email']).first():
        return 'This email is already linked with an account', 409
    # if username already exists in the db, registration error
    if User.query.filter_by(username=user_data['username']).first():
        return 'Username is taken', 409
        
    #passwd_hash = generate_password_hash(user_data['password'])
    new_user = User(email=user_data['email'], username=user_data['username'], first_name=user_data['first_name'], last_name=user_data['last_name'], password=user_data['password'])

    db.session.add(new_user)
    db.session.commit()

    return 'Successful Registration', 201

""" ************************** Login View ************************************** """
@main.route('/login', methods=['GET', 'POST'])
def login():
    user_data = request.get_json()
    # get the user from the database
    #if email, then get user by email
    if ('@' and '.') in user_data['email_or_username']:
        user = User.query.filter_by(email=user_data['email_or_username']).first()
    # else get user by username
    else:
        user = User.query.filter_by(username=user_data['email_or_username']).first()
    # if the user does not exist or the password does not match the username/email, then return 401
    if user is None or not user.verify_password(password=user_data['password']):
        return 'Invalid username or password', 401
    else:
        login_user(user)
        return 'Successful Login', 201

""" *************************** Logout View *********************************** """
@main.route('/logout')
def logout():
    logout_user()
    return 'Successful Logout', 201

""" **************************** Journal Views ******************************* """
@main.route('/journal', methods=['POST'])
def post_journal():
    journal_data = request.get_json()
    new_entry = Journal(title=journal_data['title'], body=journal_data['body'], user_id=current_user.id)
    db.session.add(new_entry)
    db.session.commit()

    return 'Successful Journal Input', 201

@main.route('/journal', methods=['GET'])
def get_users_entries():
    journal_entries = current_user.journals.all()
    journals = []
    for entry in journal_entries:
        journals.append({'title' : entry.title, 'body' : entry.body, 'date_created' : entry.date_created})

    return jsonify({'journal_entries' : journals})


@main.route('/getNewestUser', methods = ['GET']) 
def get_newest_user():

    user_sql = User.query.order_by(User.date_created.desc()).first()
    user = {'username' : user_sql.username, 'email' : user_sql.email, 'first_name' : user_sql.first_name, 'last_name' : user_sql.last_name, 'date_created' : user_sql.date_created}

    return jsonify({'newestUser': user})