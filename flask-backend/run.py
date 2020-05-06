
from app import create_app
from flask import Flask, render_template

#config_name = os.getenv('FLASK_CONFIG')
app = create_app("development")


@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html", token="Hello Flask+React")
"""
@app.route("/journal")
def journal():
    return render_template("journal.html", title = "Journal")

@app.route("/mood")
def mood():
    return render_template("mood.html", title = "Mood")

@app.route("/login")
def login():
    return render_template("login.html", title = "Login")

@app.route("/register")
def register():
    return render_template("register.html", title = "Welcome!")

"""
if __name__ == "__main__":
    app.run(debug=True)

