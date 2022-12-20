import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {

    const { store, actions} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [is_parents, setIs_parents] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [error, setError] = useState("");

    const registro = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": "helena@gmail.com",
        "password": "1234",
        "is_parents": true,
        "nombre": "Helena",
        "apellidos": "Gonzalez Gonzalez",
        "telefono": "627971028",
        "direccion": "Madrid"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://3001-helenagg-losinclusives-ome5w3o6m5y.ws-eu79.gitpod.io/api/signup", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return(
        <>
            <div className="container text-center mt-5">
                <h1 className="text-success">REGISTRO</h1>
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        <input className="form-check-input m-2" type="checkbox"></input>
                        <label className="form-check-label">Padre</label>
                        <input className="form-control mb-3 border border-success" placeholder="Nombre"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Apellidos"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Teléfono"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Dirección"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Email"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Password"></input>
                        <button className="btn btn-outline-success" onClick={registro}>Registrarse</button>
                    </div>
                </div>
            </div>
        </>
    )
}