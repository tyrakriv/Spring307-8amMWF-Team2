# nonlocal
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

# local
from app import db, login_manager



class User(UserMixin, db.Model):
    """
    create a user table
    """
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(60), index=True, unique=True)
    username = db.Column(db.String(60), index=True, unique=True)
    first_name = db.Column(db.String(60), index=True)
    last_name = db.Column(db.String(60), index=True)
    password_hash = db.Column(db.String(128))
    is_admin = db.Column(db.Boolean, default=False)
    
    @property
    def password(self):
        """ prevents password from being accessed """
        raise AttributeError('password is not an accessable attribute')

    @password.setter
    def password(self, password):
        """ set password to a hashed password """
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        """ check if hashed password matches actual password """
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User: {}>'.format(self.username)


""" Flask-Login uses this to reload the user object from the user ID stored in the session 
"""
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

""" Create Creator(app contributor) Class """
class Contributor(UserMixin, db.Model):
    """
    create a user table
    """
    __tablename__ = 'contributors'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(60), index=True, unique=True)
    username = db.Column(db.String(60), index=True, unique=True)
    first_name = db.Column(db.String(60), index=True)
    last_name = db.Column(db.String(60), index=True)
    password_hash = db.Column(db.String(128))
    is_admin = db.Column(db.Boolean, default=False)
    
    @property
    def password(self):
        """ prevents password from being accessed """
        raise AttributeError('password is not an accessable attribute')

    @password.setter
    def password(self, password):
        """ set password to a hashed password """
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        """ check if hashed password matches actual password """
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<Contributor: {}>'.format(self.username)


""" Flask-Login uses this to reload the contributor object from the contributor ID stored in the session 
"""
@login_manager.user_loader
def load_contributor(contributor_id):
    return Contributor.query.get(int(contributor_id))

