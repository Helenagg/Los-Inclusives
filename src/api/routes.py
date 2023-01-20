"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Agenda, Pictogramas #, Namepicto
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)



@api.route('/signup', methods=['POST'])
def signup():
    data = request.data
    data = json.loads (data)
    user = User(email = data["email"], 
    password = data["password"],
    is_parents = data["is_parents"],
    nombre = data["nombre"],
    apellidos = data["apellidos"],
    telefono = data["telefono"],
    direccion = data["direccion"])
    # user =  User.query.filter_by(email=email).first()
    db.session.add(user)
    db.session.commit()
    # if user == None:
    #    return jsonify ({"msg": "El usuario ya existe"}),401
    response_body = {
        "message": "Usuario Creado"
    }

    return jsonify(response_body)

@api.route('/login', methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    is_parents = request.json.get ("is_parents", None) # Meter si es padre o profesor
    user = User.query.filter_by(email=email, password=password, is_parents= is_parents).first()
    
    if user == None:
        return jsonify ({"msg": "Email o contraseña incorrecto"}),401
    access_token = create_access_token(identity=user.email)
        
    response_body = {
        "message" : "Accediendo a login",
        "token" : access_token
    }
    return jsonify(response_body),200


@api.route("/private", methods=["GET"])
@jwt_required()
def private():
    # Access the identity of the current user with get_jwt_identity
    response_body = {
        "message": "Accediendo a privada",
        "correcto": "true",
        "user": get_jwt_identity()
    }
    
    return jsonify(response_body), 200


@api.route("/agenda", methods=["POST"])
def crear_agenda():
    data = request.json
    #nombre = data["nombre"]
    #apellidos = data["apellidos"]
    #namepicto = Namepicto.query.filter_by(nombre=nombre, apellidos=apellidos).first()
    #if !namepicto:
    #   namepicto = Namepicto(
    #   nombre = data["nombre"],
    #   apellidos = data["apellidos"])
    #   db.session.add(namepicto)
    #   db.session.commit()


    agenda = Agenda(
    momentos_del_dia = data["momentos_del_dia"], 
    dias_semana = data["dias_semana"],
    nombre = data ["nombre"], #habria que quitar tambien de aqui nombre y apellidos
    apellidos = data ["apellidos"],
    urlP = data["urlP"],)
    db.session.add(agenda)
    db.session.commit()

    response_body = {
    "message": "agenda creada"
    }
    return jsonify(response_body)



@api.route("/agenda", methods=['DELETE'])
def borrar_agenda():
   data = request.data
   data = json.loads(data)

   agenda = Agenda(
   momentos_del_dia = data["momentos_del_dia"], 
   dias_semana = data["dias_semana"],
   nombre = data ["nombre"],
   apellidos = data ["apellidos"],
   urlP = data["urlP"],)
   
   db.session.delete(agenda)
   db.session.commit()
   
   
   response_body = {
      "msg": "borrando agenda"

   },
   return jsonify(agenda), 200


# @api.route("/pictogramas", methods=["POST"])
# def crear_pictograma():
#     data = request.data
#     data = json.loads (data)

#     pictograma = Agenda(
#     categoria = data["categoria"], 
#     descripcion = data["descripcion"],
#     url = data ["url"])
#     db.session.add(pictograma)
#     db.session.commit()

#     response_body = {
#     "message": "Picrograma añadido"
#     }
#     return jsonify(response_body)
    
#  Get para mostrar la agenda en la vista del niño.
#  ------------------------------------------------

@api.route('/agenda', methods=['GET'])
def mostrarAgenda():

    agendaAll = Agenda.query.all ()
    resultado = []
    resultado = [agenda.serialize () for agenda in agendaAll]
    return jsonify(resultado),200

    
# @api.route('/agenda/<nombre>/', methods=['GET'])
# def mostrarAgenda2(nombre):

#     agendaAll = Agenda.query.all ()
#     resultado = []
#     resultado = [agenda.serialize () for agenda in agendaAll]
#     return jsonify(resultado),200

@api.route('/agenda/usuarios', methods=['GET'])
def get_usuarios():
    nombre_usuarios = Agenda.query.all()
    usuarios = []
    apellidos_lista = []
    for x in nombre_usuarios:
        usuarios.append(x.nombre)
        apellidos_lista.append(x.apellidos)
    return jsonify({"nombres": usuarios, "apellidos": apellidos_lista}), 200

    
    
@api.route('<string:dia_var>/<string:nombre_var>/<string:apellidos_var>/', methods=['GET'])
def get_momentos(nombre_var, apellidos_var, dia_var):
    Pictos = Agenda.query.filter_by(nombre = nombre_var, apellidos = apellidos_var, dias_semana=dia_var).all()
    pictos_mañana = []
    pictos_tarde = []
    pictos_noche = []
    for x in Pictos:
        if x.momentos_del_dia == "Mañana":
            pictos_mañana.append(x.urlP)
        elif x.momentos_del_dia == "Tarde":
            pictos_tarde.append(x.urlP)
        elif x.momentos_del_dia == "Noche":
            pictos_noche.append(x.urlP)
    return jsonify({"mañana": pictos_mañana, "tarde": pictos_tarde, "noche": pictos_noche}), 200
