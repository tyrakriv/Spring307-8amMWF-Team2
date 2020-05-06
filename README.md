# Spring307-8amMWF-Team2

# Running Convention:
We will be running our web app exclusively from the flask backend. In order to do this, we must:
1. "npm run build" in the setup-react directory to compile the react app
2. "python3 run.py" in the flask-backend directory to run the web app from our flask backend
Because of this convention, we will not be able to take advantage of live debugging mode, since we 
have to recompile our react app everytime we want to see a change.

# Initial Setup for Backend
1. sudo apt update
2. sudo apt install python3 
3. sudo apt install python3-pip
4. pip3 install flask

# Initial Setup for Frontend
1. sudo apt update
2. sudo apt install nodejs
3. sudo apt install npm

# Ensure virtual environment is setup
pip3 install virtualenv

# __Before any running or developing the backend__ : 
Activate virtual environment in 'Backend' Directory:
### On Mac / Linux:
source venv/bin/activate
### on Windows:
venv\Scripts\activate
## To deavtivate virtual environment
deactivate

# Initial Setup for Database
1. sudo mysql -u root
2. in mysql> CREATE USER 'Mindify_Admin'@'localhost' IDENTIFIED BY 'Mindify404';
3. in mysql> CREATE DATABASE mindify_db;
4. in mysql> GRANT ALL PRIVILEGES ON mindify_db . * TO 'Mindify_Admin'@'localhost';

## Then inside of backend directory, run the following commands in terminal:
1. flask db init
2. flask db migrate
3. flask db upgrade
## to check for success:
1. sudo mysql -u root
2. in mysql> use mindify_db;
3. in mysql> show tables;

