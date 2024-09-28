from flask import Flask

app = Flask(__name__)

@app.route("/courses")
def hello_world():
    return "1"
