# nonlocal
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
# local
from . import db, login_manager



class User(UserMixin, db.Model):
    """ create a user table """
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(60), index=True, unique=True)
    username = db.Column(db.String(60), index=True, unique=True)
    first_name = db.Column(db.String(60), index=True)
    last_name = db.Column(db.String(60), index=True)
    password_hash = db.Column(db.String(128))
    date_created = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    is_contributor = db.Column(db.Boolean, default=False)
    journals = db.relationship('Journal', backref='author', lazy='dynamic')
    
    @property
    def password(self):
        """ prevents password from being accessed """
        raise AttributeError('password is not an accessable attribute')

    @password.setter
    def password(self, passwd):
        """ set password to a hashed password """
        self.password_hash = generate_password_hash(passwd)

    def verify_password(self, password):
        """ check if hashed password matches actual password """
        return check_password_hash(self.password_hash, password)

    def make_contributor(self):
        """ set user to contributor """
        self.is_contributor = True
        #db.session.commit()

    def get_user_json(self):
        return {
            "id" : self.id,
            "username" : self.username,
            "email" : self.email,
            "first_name" : self.first_name,
            "last_name" : self.last_name,
            "date_created" : self.date_created,
            "is_contributor" : self.is_contributor
        }

    def __repr__(self):
        return '<User: {}>'.format(self.username)


""" Flask-Login uses this to reload the user object from the user ID stored in the session 
"""
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class Journal(db.Model):
    """ create a user table """
    __tablename__ = 'journals'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), index=True)
    body = db.Column(db.String(7500))
    date_created = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def update_body(self, new_body):
        self.body = new_body

    def update_title(self, new_title):
        self.title = new_title

    def get_journal_json(self):
        return {
            'id' : self.id, 
            'title' : self.title, 
            'body' : self.body, 
            'date_created' : self.date_created
        }

    def __repr__(self):
        return "<Journal's user_id={0}, created on {1}>".format(self.user_id, self.date_created)