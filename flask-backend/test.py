#!flask/bin/python
import os
import unittest
import json
from flask import jsonify

from run import app
from app.models import User, Journal
from app.views import *
from datetime import datetime


class TestCase(unittest.TestCase):
    
    def test_password_privacy(self):
        user = User(email='user@aol.com', username='test')
        user.password = 'password'
        with self.assertRaises(AttributeError):
            password = user.password
    
    def test_password_success(self):
        correct = 'password'
        user = User(email='user@aol.com', username='test', password=correct)
        self.assertTrue(user.verify_password(correct))

    def test_passsword_failure(self):
        correct = 'password'
        incorrect = 'notpassword'
        user = User(email='user@aol.com', username='test', password=correct)
        self.assertFalse(user.verify_password(incorrect))

    def test_make_contributor(self):
        user = User(email='test@aol.com', username='test', password='password')
        #is_contributor defaults to false
        self.assertFalse(user.is_contributor)
        user.make_contributor()
        self.assertTrue(user.is_contributor)

    def test_get_user_json(self):
        id = 1
        username = "jrob"
        email = "jrob@test.com"
        firstname = "john"
        lastname = "robinson"
        date = datetime.utcnow
        is_contributor = True
        json_expected = {
            "id" : id,
            "username" : username,
            "email" : email,
            "first_name" : firstname,
            "last_name" : lastname,
            "date_created" : date,
            "is_contributor" : is_contributor
        }
        user = User(id=id, username=username, email=email, first_name=firstname, \
                    last_name=lastname, date_created=date, password="password", \
                    is_contributor=is_contributor)
        self.assertEqual(json_expected, user.get_user_json())
        
    def test_user_repr(self):
        username = "test"
        user = User(username=username)
        user_repr = "<User: {0}>".format(username)
        self.assertEqual(user_repr, repr(user))

    def test_update_body(self):
        old_body = "first"
        new_body = "second"
        journal = Journal(title="test", body=old_body)
        self.assertEqual(old_body, journal.body)
        journal.update_body(new_body)
        self.assertEqual(new_body, journal.body)
    
    def test_update_title(self):
        old_title = "first"
        new_title = "new"
        journal = Journal(title=old_title, body="hello")
        self.assertEqual(old_title, journal.title)
        journal.update_title(new_title)
        self.assertEqual(new_title, journal.title)

    def test_get_journal_json(self):
        id = 1
        title = "test title"
        body = "journal body"
        date = datetime.utcnow
        json_expected = {
            "id" : id,
            "title" : title,
            "body" : body,
            "date_created" : date
        }
        journal = Journal(id=id, title=title, body=body, date_created=date)
        self.assertEqual(json_expected, journal.get_journal_json())

    def test_journal_repr(self):
        user_id = 1
        date = datetime.utcnow
        journal = Journal(user_id=user_id, date_created=date)
        journal_repr = "<Journal's user_id={0}, created on {1}>".format(user_id, date)
        self.assertEqual(journal_repr, repr(journal))

if __name__ == '__main__':
    unittest.main()