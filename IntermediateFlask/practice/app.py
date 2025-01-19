from flask import Flask, request, render_template, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Employee, EmployeeProject, Department

from forms import AddSnackForm, EmployeeForm


app = Flask(__name__)
app.env= 'development'
app.debug = True


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config["SECRET_KEY"] = "oh-so-secret"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
app.config['DEBUG_TB_PROFILER_ENABLED'] = True
app.config['DEBUG_TB_ENABLED'] = True
app.config['DEBUG'] = True



debug = DebugToolbarExtension(app)

app.app_context().push()

connect_db(app)


@app.route("/")
def homepage():
    """Show homepage links."""

    return render_template("index.html")


@app.route("/phones")
def phone_list():
    """Get list of users & dept phones.

    This version will be a 'n+1 query' --- it will query once for all
    users, and then for each department.

    There's a way to tell SQLAlchemy to load all the data in a single query,
    but don't worry about this for now.
    """

    emps = Employee.query.all()
    return render_template("phones.html", emps=emps)


@app.route('/snacks/new', methods=["GET","POST"])
def add_snack():
    print(request.form)
    form = AddSnackForm()
    if form.validate_on_submit():
        name = form.name.data
        price = form.price.data
        flash(f"Created new snack: name is {name}, price is ${price}!")
        return redirect("/")
    else:
        return render_template("add_snack_form.html", form=form)
    
@app.route('/employees/new', methods=["GET", "POST"])
def add_employee():
    form = EmployeeForm()
    depts = db.session.query(Department.dept_code, Department.dept_name).all() 
    form.dept_code.choices = [(d.dept_code, f"{d.dept_code} - {d.dept_name}") for d in depts]

    if form.validate_on_submit():
        name = form.name.data
        state = form.state.data
        dept_code = form.dept_code.data

        emp = Employee(name=name, state=state, dept_code=dept_code)
        db.session.add(emp)
        db.session.commit()
        return redirect('/phones')
    else:
        return render_template('add_employee_form.html', form=form)
    
@app.route('/employees/<int:id>/edit', methods=["GET", "POST"])
def edit_employee(id):
    emp = Employee.query.get_or_404(id)
    form = EmployeeForm(obj=emp)
    depts = db.session.query(Department.dept_code, Department.dept_name).all() 
    form.dept_code.choices = [(d.dept_code, f"{d.dept_code} - {d.dept_name}") for d in depts]
    
    if form.validate_on_submit():
        emp.name = form.name.data
        emp.state = form.state.data
        emp.dept_code = form.dept_code.data
        db.session.commit()
        return redirect('/phones')
    else:    
        return render_template("edit_employee_form.html", form=form)
