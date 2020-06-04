# nonlocal imports
from flask import Blueprint, jsonify, render_template, request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import current_user, login_user, logout_user
# local
from . import db, login_manager
from .models import User, Journal


main = Blueprint('main', __name__)

@main.route('/home')
def home():
    return render_template('home.html', title='Home')

""" ************************* Registration View ******************************* """
@main.route('/api/register', methods=['GET', 'POST'])
def register_user():
    user_data = request.get_json()
    #if '@' in user_data['username']:
    #    return "May not have '@' symbol in username", 409
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

    user_json = new_user.get_user_json()
    return jsonify({"user" : user_json}), 201
    # return 'Successful Registration', 201

""" ************************** Login View ************************************** """
@main.route('/api/login', methods=['GET', 'POST'])
def login():
    user_data = request.get_json()
    # get the user from the database
    #if email, then get user by email
    if ('@' and '.') in user_data['email_or_username']:
        user = User.query.filter_by(email=user_data['email_or_username']).first()
    # else get user by username
    else:
        user = User.query.filter_by(username=user_data['email_or_username']).first()
    
    # check to make sure the requested privileges match the privileges the user has
    if user is not None:
        authorized = True if (user_data['is_contributor'] == user.is_contributor) else False
    
    # if the user does not exist or the password does not match the username/email, then return 401
    if user is None or not user.verify_password(password=user_data['password']):
        return 'Invalid username or password', 204

    # if the user does not have the correct privileges, return 401
    elif not authorized:
        return 'Invalid User-Privilege', 204
    else:
        login_user(user, remember=True, force=True)
        user_json = user.get_user_json()
        return jsonify({"user" : user_json}), 201

""" *************************** Logout View *********************************** """
@main.route('/api/logout', methods=['GET'])
def logout():
    logout_user()
    return 'Successful Logout', 201

""" **************************** Journal Views ******************************* """
@main.route('/api/postJournal', methods=['POST'])
def post_journal():
    journal_data = request.get_json()
    new_entry = Journal(title=journal_data['title'], body=journal_data['body'], user_id=journal_data['user_id'])
    db.session.add(new_entry)
    db.session.commit()

    return 'Successful Journal Input', 201

@main.route('/api/editJournal', methods=['POST'])
def edit_journal():
    journal_data = request.get_json()
    entry = Journal.query.get(journal_data['entry_id'])
    entry.update_title(journal_data['title'])
    entry.update_body(journal_data['body'])
    db.session.commit()

    return 'Successful Journal Input', 201

@main.route('/api/getJournals', methods=['GET', 'POST'])
def get_users_entries():
    user_data = request.get_data()
    user = User.query.filter_by(username=user_data).first()
    journal_entries = user.journals.all()
    journals = []
    for entry in journal_entries:
        journals.append(entry.get_journal_json())

    return jsonify({'journal_entries' : journals})

@main.route('/api/removeJournal', methods=['POST'])
def remove_entry():
    # JSON will have "username" and "entry_title" fields
    user_data = request.get_json()
    user = User.query.filter_by(username=user_data['username']).first()
    entry_to_remove = Journal.query.filter_by(user_id=user.id).filter_by(title=user_data['entry_title']).first()
    db.session.delete(entry_to_remove)
    db.session.commit()
    return "Successful Removal", 201

@main.route('/getNewestUser', methods = ['GET']) 
def get_newest_user():

    user_sql = User.query.order_by(User.date_created.desc()).first()
    user = {'username' : user_sql.username, 'email' : user_sql.email, 'first_name' : user_sql.first_name, 'last_name' : user_sql.last_name, 'date_created' : user_sql.date_created}

    return jsonify({'newestUser': user})