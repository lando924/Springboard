from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_shop_db'
debug = DebugToolbarExtension(app)

app.config['SECRET_KEY'] = "chickenzarecool121837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.app_context().push()

connect_db(app)

@app.route('/')
def list_pets():
    """Shows list pets in db"""
    pets = Pet.query.all()
    return render_template('lists.html', pets=pets)

@app.route('/<int:pet_id>')
def show_pet(pet_id):
    """Show details about a single pet"""
    pet = Pet.query.get(pet_id)
    return render_template("details.html", pet=pet)

