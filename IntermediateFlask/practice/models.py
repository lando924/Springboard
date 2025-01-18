from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)


class User(db.Model):
    """User."""

    __tablename__ = "users"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    email = db.Column(db.Text, nullable=True)

class Department(db.Model):
    """Department. A department has many employees"""

    __tablename__ = "departments"

    dept_code = db.Column(db.Text, primary_key=True)
    dept_name = db.Column(db.Text,
                          nullable=False,
                          unique=True)
    phone = db.Column(db.Text)

    def __repr__(self):
        return f"<Department {self.dept_code} {self.dept_name} {self.phone}"

class Employee(db.Model):
    """Employee Model"""

    __tablename__ = "employees"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text, nullable=False, unique=True)
    state = db.Column(db.Text, nullable=False, default='NY')
    dept_code = db.Column(db.Text, db.ForeignKey('departments.dept_code'))

    dept = db.relationship('Department', backref = 'employees')

    assignments = db.relationship('EmployeeProject', backref='employee')

    projects = db.relationship('Project', secondary="employees_projects", backref="employees")

    def __repr__(self):
        return f"<Employee {self.name} {self.state} {self.dept_code}>"
    
class Project(db.Model):
    """"""
    __tablename__ = 'projects'

    proj_code = db.Column(db.Text, primary_key=True)
    proj_name = db.Column(db.Text, nullable=False, )

    assignments = db.relationship('EmployeeProject', backref='project')

class EmployeeProject(db.Model):
    """Mapping of an employee to a project"""
    __tablename__ = 'employees_projects'

    emp_id = db.Column(db.Integer,
                       db.ForeignKey("employees.id"),
                       primary_key=True)
    proj_code = db.Column(db.Text,
                       db.ForeignKey("projects.proj_code"),
                       primary_key=True)
    role = db.Column(db.Text)
