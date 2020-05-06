# Spring307-8amMWF-Team2

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

