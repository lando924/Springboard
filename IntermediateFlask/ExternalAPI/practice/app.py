from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route("/")
def show_address_form():
    return render_template("address_form.html")

@app.route("/geocode")
def get_location():
    address = request.params["address"]
    res = requests.get(f"{API_BASE_URL}/address", 
                 params = {'key': key, 'location': address})
    import pdb
    pdb.set_trace()