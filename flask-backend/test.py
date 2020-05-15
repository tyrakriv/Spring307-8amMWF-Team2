#!flask/bin/python
import os
import unittest
import json
from flask import jsonify

from run import app
from app.models import User, Journal
from app.views import *


""" You will have to manually delete the user from the database after running the test cases.
    This is because the unittest cannot have a dependency with the db object """
class TestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
    
    def test_password_privacy(self):
        user = User(email='user@aol.com', username='test')
        user.password = 'password'
        with self.assertRaises(AttributeError):
            password = user.password
    
    def verify_password_success(self):
        """ write test """

    def verify_passsword_failure(self):
        """ write test """
        
    ## Data Base Tests are more so Integration Tests
    # def test_successful_registration(self):
    #     url = '/register'
    #     mock_data = { 
    #         "email" : "tester@fakeEmail.com", 
    #         "username" : "test_user123123123",
    #         "first_name" : "Jon",
    #         "last_name" : "Doe", 
    #         "password" : "test_password"
    #     }
    #     response = self.app.post(url, json=mock_data)
    #     self.assertEqual(response.status_code, 201)
    #     self.assertEqual(response.get_data(), b'Successful Registration')
    #     #need to find out if possible to delete user in db from here
        
    # def test_successful_login(self):
    #     url = '/register'
    #     mock_user = { 
    #         "email" : "new@fakeEmail.com", 
    #         "username" : "test_user123123127",
    #         "first_name" : "Jon",
    #         "last_name" : "Doe", 
    #         "password" : "test_password"
    #     }
    #     self.app.post(url, json=mock_user)
    #     url = '/login'
    #     mock_data = {
    #         "email_or_username" : "new@fakeEmail.com",
    #         "password" : "test_password"
    #     }
    #     response = self.app.post(url, json=mock_data)
    #     self.assertEqual(response.status_code, 201)
    #     self.assertEqual(response.get_data(), b'Successful Login')
    #     # need to find out if possible to delete users in db from here

if __name__ == '__main__':
    unittest.main()