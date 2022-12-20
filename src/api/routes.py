"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User
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
    user =  User.query.filter_by(email=email).first()
    db.session.add(user)
    db.session.commit()
    if user == None:
       return jsonify ({"msg": "El usuario ya existe"}),401
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