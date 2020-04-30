from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/journal")
def journal():
    return render_template("journal.html")

@app.route("/mood")
def mood():
    return render_template("mood.html")
    
if __name__ == "__main__":
    #app.run() # when not debugging
    app.run(debug = True) # when debugging