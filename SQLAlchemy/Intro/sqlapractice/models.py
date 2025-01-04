from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    with app.app_context():
        db.app = app
        db.init_app(app)
        db.create_all()

#git 
#MODELS GO BELOW!
        """Pet."""
class Pet(db.Model):
    __tablename__= "pets"


    @classmethod
    def get_by_species(cls, species):
        cls.query.filter_by(species=species).all()

    @classmethod
    def get_all_hungry(cls):
        return cls.query.filter(Pet.hunger > 20).all()


    def __repr__(self):
        p = self
        return f"<Pet id={p.id} name={p.species} hunger={p.hunger}>"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.String(50),
                   nullable=False,
                   autoincrement=True)
    species = db.Column(db.String(30),
                        nullable=True,
                        )
    hunger = db.Column(db.Integer, nullable=False, default=20)

    def greet(self):
        return f"Hi, I am {self.name} the {self.species} "
    
    def feed(self, amt=20):
        """Update hunger based off of amt"""
        self.hunger -= amt
        self.hunber = max(self.hunger, 0)


