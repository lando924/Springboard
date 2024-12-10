from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "secretsareNOFUN"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

RESPONSES_KEY = "responses"

@app.route("/")
def show_survey_start():
    """Start by picking survey"""
    
    return render_template("survey_start.html", survey=survey)

@app.route("/begin", methods=["POST"])
def start_survey():
    session[RESPONSES_KEY] = []

    return redirect("/questions/0")

@app.route("/answer", methods=["POST"])
def handle_question():
    """Save response and redirect to next question"""

    choice = request.form['answer']

    responses = session[RESPONSES_KEY]
    responses.append(choice)
    session[RESPONSES_KEY] = responses

    if (len(responses) == len(survey.questions)):
        return redirect("/complete")
    
    else:
        return redirect(f"/questions/{len(responses)}")
    

@app.route("/questions/<int:question_id>")
def show_question(question_id):
    """Display question"""
    responses = session.get(RESPONSES_KEY)

    if (responses is None):
        return redirect("/")
    
    if (len(responses) == len(survey.questions)):
        return redirect("/complete")
    
    if (len(responses) != question_id):
        flash(f"Invalid question id: {question_id}.")
        return redirect(f"/questions/{len(responses)}")

    question = survey.questions[question_id]
    return render_template("questions.html", question_num = question_id, question = question)

@app.route("/complete")
def complete():
    """Survey complete. Show completion page."""

    return render_template("completion.html")