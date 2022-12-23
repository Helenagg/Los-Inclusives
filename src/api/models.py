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


class Hijos (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column (db.String(80), nullable=False)
    apellidos = db.Column (db.String(80), nullable=False)
    agenda_id = db.Column (db.Integer, db.ForeignKey("agenda.id"))
    agenda = db.relationship("Agenda")
   
    def __repr__(self):
        return f'<Hijos {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos
        }

class Relacion (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hijos_id = db.Column (db.Integer, db.ForeignKey("hijos.id"))
    hijos = db.relationship("Hijos")
    user_id = db.Column (db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User")
   
    def __repr__(self):
        return f'<Relacion {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "hijos_id": self.hijos_id,
            "user_id": self.user_id
        }

class Pictogramas (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    categoria =  db.Column (db.String(250), nullable=False)
    descripcion = db.Column (db.String(250), nullable=False)
    url = db.Column (db.String(200), nullable=False)

    def __repr__(self):
        return f'<Pictograma {self.categoria}>'

    def serialize(self):
        return {
            "id": self.id,
            "categoria" : self.categoria,
            "url" : self.url
    
        }

class Agenda ( db.Model):
    id = db.Column ( db.Integer, primary_key = True)
    dias_semana = db.Column (db.String(200), nullable= False)
    momentos_del_dia = db.Column ( db.String(200), nullable = False)
    pictogramas_id = db.Column (db.Integer, db.ForeignKey("pictogramas.id"))
    pictogramas = db.relationship ("Pictogramas")


def __repr__(self):
        return f'<Agenda {self.id}>'

def serialize(self):
    return {
        "id": self.id,
        "dias_semana" : self.dias_semana,
        "momentos_del_dia" : self.momentos_del_dia
    
    }

# class Mensajeria (db.Model): 
#     id = db.Column ( db.Integer, primary_key = True)
#     user_emisor = db.Column ( db.Integer, db.ForeignKey("user.id"))
#     user_emi = db.relationship ("User")
#     # user_receptor = db.Column ( db.Integer, db.ForeignKey("user.id"))
#     # user_recep = db.relationship ("User")
#     mensaje = db.Column (db.String ( 2000), nullable = False)

# def __repr__(self):
#         return f'<Mensajeria {self.id}>'

# def serialize(self):
#     return {
#         "id": self.id,
#         "user_emisor" : self.user_emisor,
#         "user_receptor" : self.user_receptor,
#         "mensaje" : self.menasje
    
#     }