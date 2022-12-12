from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    nombre = db.Column (db.String(80), nullable=False)
    apellidos = db.Column (db.String(80), nullable=False)
    telefono = db.Column (db.Integer, unique=True, nullable=True)
    direccion = db.Column (db.String(80), nullable=True)
    is_parents = db.Column(db.Boolean(), nullable=False) # Aquí decimos si es padre o no para decidir por una ruta padres o profesor
    hijos_id = db.Column (db.Integer, db.ForeignKey("hijos.id"))
    hijos = db.relationship(Hijos)
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
class Pictogramas (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description =  db.Column (db.String(250), nullable=False)
    url = db.Column (db.String(200), nullable=False)

    def __repr__(self):
        return f'<Pictogramas {self.description}>'

    def serialize(self):
        return {
            "id": self.id,
            "description" : self.description,
            "url" : self.url
    
        }

class Hijos (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column (db.String(80), nullable=False)
    apellidos = db.Column (db.String(80), nullable=False)
    dia_semana= db.Column (db.String (80), nullable = False)
    momento_dia= db.Column (db.String (80), nullable = False)
    pictogramas_id = db.Column (db.Integer, db.ForeignKey("pictogramas.id"))
    pictogramas = db.relationship (Pictogramas)
    def __repr__(self):
        return f'<Hijos {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos
        }

