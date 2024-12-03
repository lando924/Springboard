# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route("/add")
def add_endpoint():
    """Add a and b parameters"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a, b)
    
    return str(result)

@app.route('/sub')
def sub_endpoint():
    """Subtract a and b parameters"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = sub(a, b)
    
    return str(result)

@app.route('/mult')
def mult_endpoint():
    """Multiply a and b parameters"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = mult(a, b)
    
    return str(result)

@app.route('/div')
def div_endpoint():
    """Divide a and b parameters"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = div(a, b)
    
    return str(result)

# Further Study

operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
}

@app.route("/math/<oper>")
def do_math(oper):
    """Provide solution based on operation provided"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[oper](a, b)

    return str(result)

