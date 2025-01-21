"""Flask app for Cupcakes"""

from flask import Flask, request, jsonify, render_template

from models import db, connect_db, Cupcake

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "oh-so-secret"

app.app_context().push()

connect_db(app)

@app.route('/')
def show_home():
    """Show all cupcakes"""
    cupcakes = Cupcake.query.all()
    return render_template('index.html', cupcakes=cupcakes)

@app.route('/api/cupcakes')
def list_cupcakes():
    """Return JSON for all cupcakes"""
    all_cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]
    return jsonify(cupcakes=all_cupcakes)

@app.route('/api/cupcakes/<int:id>')
def get_cupcake(id):
    """Return JSON for single cupcake"""
    cupcake = Cupcake.query.get_or_404(id)
    cupcake = cupcake.serialize()
    return jsonify(cupcake)

@app.route('/api/cupcakes', methods=["POST"])
def create_cupcake():
    """Create cupcake in JSON"""
    data = request.json
    new_cupcake = Cupcake(flavor=data['flavor'], image=data.get('image') or None, rating=data['rating'], size=data['size'])
    db.session.add(new_cupcake)
    db.session.commit()
    cupcake = jsonify(cupcake=new_cupcake.serialize())
    return(cupcake, 201)

@app.route('/api/cupcakes/<int:id>', methods=["PATCH"])
def update_cupcake(id):
    """Update cupcake in JSON"""
    data = request.json
    cupcake = Cupcake.query.get_or_404(id)

    cupcake.flavor = data.get('flavor', cupcake.flavor)
    cupcake.size = data.get('size', cupcake.size)
    cupcake.rating = data.get('rating', cupcake.rating)
    cupcake.image = data.get('image', cupcake.image) or None

    db.session.commit()

    return jsonify(cupcake=cupcake.serialize())

    


@app.route('/api/cupcakes/<int:id>', methods=["DELETE"])
def delete_cupcake(id):
    """Delete cupcake"""
    cupcake = Cupcake.query.get_or_404(id)
    db.session.delete(cupcake)
    db.session.commit()
    return jsonify(message="deleted")
