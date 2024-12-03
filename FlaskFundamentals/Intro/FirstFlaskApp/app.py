from flask import Flask, request

app = Flask(__name__)
# new server running

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
    return html

@app.route('/hello')
def say_hello():
    html = """
    <html>
        <body>
            <h1>Hello!</h1>
            <p>This is the hello page</p>
        </body>
    </html>
    """
    return html

@app.route('/goodbye')
def say_bye():
    return "GOOD BYE!!!!"

@app.route('/katy')
def who_katy():
    html = """
    <h1>Katy is my dog!</h1>
    """
    return html


@app.route('/search')
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    # use term to find db data that matches
    return f"<h1>Search Results For: {term}</h1> <p>Sorting by: {sort}</p>"

# @app.route("/post", methods=["POST"])
# def post_demo():
#     return "YOU MADE A POST REQUEST!!"


# @app.route("/post", methods=["GET"])
# def get_demo():
#     return "YOU MADE A GET REQUEST!!"

@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add Comment </h1>
    <form method='POST'>
        <input type = 'text' placeholder='comment' name='comment'/>
        <input type = 'text' placeholder='username' name='username'/>
        <button>Submit</button>
    </form>
"""

@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment = request.form["comment"]
    username = request.form["username"]
    print(request.form)
    return f"""
    <h1>SAVED YOUR COMMENT WITH TEXT OF {comment}</h1>
    <ul>
        <li>Username: {username}</li>
        <li>Comment: {comment}</li>
    </ul>
    """

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"<h1>Browsing The {subreddit} Subreddit</h1>"

@app.route("/r/<subreddit>/comments/<int:post_id>")
def show_comments(subreddit, post_id):
        return f"<h1>Viewing comments for post with id: {post_id} from the {subreddit} Subreddit</h1>"


POSTS = {
    1: "I like chicken tenders",
    2: "I hate mayo!",
    3: "Double rainbow all the way",
    4: "YOLO OMG (yerrrr)"
}

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS.get(id, "Post not found")
    return f"<p>{post}</p>"

# @app.route("/products/<category>/<int:product_id>")
# def prodcut_detail(category, product_id):
#     """SHow detail page for product."""