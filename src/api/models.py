from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column (db.String(80), unique=True, nullable=False)
    apellidos = db.Column (db.String(80), unique=True, nullable=False)
    telefono = db.Column (db.Integer, unique=True, nullable=True)
    direccion = db.Column (db.String(80), unique=True, nullable=True)
    is_parents = db.Column(db.Boolean(), unique=False, nullable=False) # Aquí decimos si es padre o no para decidir por una ruta padres o profesor

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "telefono" : self.telefono,
            "direccion" : self.direccion
            # do not serialize the password, its a security breach
        }
