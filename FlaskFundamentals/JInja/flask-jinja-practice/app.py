from flask import Flask, request, render_template, redirect, flash, jsonify
from random import randint, choice, sample
from flask_debugtoolbar import DebugToolbarExtension




app = Flask(__name__)
# new server running
app.config['SECRET_KEY'] = "chickenzareCOOL924879"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

MOVIES = {'Amedeus', 'Chicken Run', 'Elf', 'Goal'}

@app.route('/')
def home_page():
    html = """
    <html>
        <body>
            <h1>Home Page</h1>
            <p>Welcome to my simple app!</p>
            <a href='/hello'>Go to hello page</a>
        </body>
    </html>
    """
    return render_template('home.html')

@app.route('/old-home-page')
def redirect_to_home():
    """Redirects to new home page"""
    flash('That page has moved! This is our new home page!')
    return redirect("/")

@app.route('/movies')
def show_all_movies():
    """Shows a list of all movies in fake DB"""
    return render_template('movies.html', movies=MOVIES)

@app.route('/movies/new', methods=["POST"])
def add_movie():
    title = request.form['title']
    # add to pretend DB
    if title in MOVIES:
        flash('Movie Already Exists!', 'error')
    else:
        MOVIES.add(title)
        flash("Created Your Movie", 'success')
    return redirect('/movies')

@app.route('/movies/json')
def get_movies_json():
    json_obj = jsonify(list(MOVIES))
    print(json_obj.status_code)
    return json_obj

# @app.route('/form')
# def show_form():
#     return render_template("form.html")

# @app.route('/form-2')
# def show_form_2():
#     return render_template("form_2.html")

# COMPLIMENTS = ["cool", "clever", "tenacious", "awesome", "Pythonic"]

# @app.route('/greet')
# def get_greeting():
#     username = request.args["username"]
#     nice_thing = choice(COMPLIMENTS)
#     return render_template("greet.html", username=username, compliment=nice_thing)

# @app.route('/greet-2')
# def get_greeting_2():
#     username = request.args["username"]
#     wants = request.args.get("wants_compliments")
#     nice_things = sample(COMPLIMENTS, 3)
#     return render_template("greet_2.html", username=username, wants_compliments=wants, compliments=nice_things)


# @app.route('/lucky')
# def lucky_num():
#     """Example of a random int"""
#     num = randint(1,5)
#     return render_template('lucky.html', lucky_num=num, msg="You are so lucky!")

# @app.route('/spell/<word>')
# def spell_word(word):
#     caps_word = word.upper()
#     return render_template('spell_word.html', word=caps_word)


# @app.route('/hello')
# def say_hello():
#     """Shows hello page"""
#     return render_template("hello.html")

# @app.route('/goodbye')
# def say_bye():
#     return "GOOD BYE!!!!"

# @app.route('/katy')
# def who_katy():
#     html = """
#     <h1>Katy is my dog!</h1>
#     """
#     return html


# @app.route('/search')
# def search():
#     term = request.args["term"]
#     sort = request.args["sort"]
#     # use term to find db data that matches
#     return f"<h1>Search Results For: {term}</h1> <p>Sorting by: {sort}</p>"

# # @app.route("/post", methods=["POST"])
# # def post_demo():
# #     return "YOU MADE A POST REQUEST!!"


# # @app.route("/post", methods=["GET"])
# # def get_demo():
# #     return "YOU MADE A GET REQUEST!!"

# @app.route('/add-comment')
# def add_comment_form():
#     return """
#     <h1>Add Comment </h1>
#     <form method='POST'>
#         <input type = 'text' placeholder='comment' name='comment'/>
#         <input type = 'text' placeholder='username' name='username'/>
#         <button>Submit</button>
#     </form>
# """

# @app.route('/add-comment', methods=["POST"])
# def save_comment():
#     comment = request.form["comment"]
#     username = request.form["username"]
#     print(request.form)
#     return f"""
#     <h1>SAVED YOUR COMMENT WITH TEXT OF {comment}</h1>
#     <ul>
#         <li>Username: {username}</li>
#         <li>Comment: {comment}</li>
#     </ul>
#     """

# @app.route('/r/<subreddit>')
# def show_subreddit(subreddit):
#     return f"<h1>Browsing The {subreddit} Subreddit</h1>"

# @app.route("/r/<subreddit>/comments/<int:post_id>")
# def show_comments(subreddit, post_id):
#         return f"<h1>Viewing comments for post with id: {post_id} from the {subreddit} Subreddit</h1>"


# POSTS = {
#     1: "I like chicken tenders",
#     2: "I hate mayo!",
#     3: "Double rainbow all the way",
#     4: "YOLO OMG (yerrrr)"
# }

# @app.route('/posts/<int:id>')
# def find_post(id):
#     post = POSTS.get(id, "Post not found")
#     return f"<p>{post}</p>"

# # @app.route("/products/<category>/<int:product_id>")
# # def prodcut_detail(category, product_id):
# #     """SHow detail page for product."""

