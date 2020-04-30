from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html", title = "Home")

@app.route("/journal")
def journal():
    return render_template("journal.html", title = "Journal")

@app.route("/mood")
def mood():
    return render_template("mood.html", title = "Mood")

@app.route("/login")
def login():
    return render_template("login.html", title = "Login")
    
if __name__ == "__main__":
    #app.run() # when not debugging
    app.run(debug = True) # when debugging