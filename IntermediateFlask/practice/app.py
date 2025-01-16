from flask import Flask, render_template, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

from forms import AddSnackForm


app = Flask(__name__)
app.debug = True

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///flask_wtforms'
app.config["SECRET_KEY"] = "oh-so-secret"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
app.config['DEBUG_TB_PROFILER_ENABLED'] = True
app.config['DEBUG_TB_ENABLED'] = True


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
    form = AddSnackForm()
    if form.validate_on_submit():
        raise
        print(form.name.data)
        print(form.price.data)
        flash("Snack added successfully!")
        return redirect("/")
    else: 
        return render_template("add_snack_form.html", form=form)