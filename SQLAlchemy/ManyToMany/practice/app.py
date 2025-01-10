from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, Department, Employee, get_directory, get_directory_join, get_directory_join_class, get_directory_all_join_class, Project, EmployeeProject

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'dogsarebetterthancats1234'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)

app.app_context().push()

connect_db(app)

@app.route('/phone')
def list_phones():
    emps = Employee.query.all()
    return render_template('phones.html', emps=emps)
