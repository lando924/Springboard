from flask import Flask, request, render_template, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

from forms import AddSnackForm


app = Flask(__name__)
app.env= 'development'
app.debug = True


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///flask_wtforms'
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


# @app.route("/add", methods=["GET", "POST"])
# def add_snack():
#     """Snack add form; handle adding."""

#     form = AddSnackForm()

#     if form.validate_on_submit():
#         name = form.name.data
#         price = form.price.data
#         flash(f"Added {name} at {price}")
#         return redirect("/add")

#     else:
#         return render_template(
#             "snack_add_form.html", form=form)

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