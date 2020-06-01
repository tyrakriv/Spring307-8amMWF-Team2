 
import time 
from flask import Flask

app = Flask(__name__)

@app.route('/addUser', methods=["GET", "POST"])
def login():
  return {'time': time.time()}

