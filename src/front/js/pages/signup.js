import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {

    const { store, actions} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [error, setError] = useState("");

    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    const registro = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": email,
        "password": password,
        "is_parents": isChecked,
        "nombre": nombre,
        "apellidos": apellidos,
        "telefono": telefono,
        "direccion": direccion
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://3001-helenagg-losinclusives-ome5w3o6m5y.ws-eu79.gitpod.io/api/signup", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.message) navigate("/")
        })
        .catch(error => console.log('error', error));
    }

    return(
        <>
            <div className="container text-center mt-5">
                <h1 className="text-success">REGISTRO</h1>
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        <input className="form-check-input m-2" type="checkbox" checked={isChecked} onChange={handleOnChange}></input>
                        <label className="form-check-label">Padre</label>
                        <input className="form-control mb-3 border border-success" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)}></input>
                        <input className="form-control mb-3 border border-success" placeholder="Apellidos" onChange={(event) => setApellidos(event.target.value)}></input>
                        <input className="form-control mb-3 border border-success" placeholder="Teléfono" onChange={(event) => setTelefono(event.target.value)}></input>
                        <input className="form-control mb-3 border border-success" placeholder="Dirección" onChange={(event) => setDireccion(event.target.value)}></input>
                        <input className="form-control mb-3 border border-success" placeholder="Email" onChange={(event) => setEmail(event.target.value)}></input>
                        <input className="form-control mb-3 border border-success" placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
                        <button className="btn btn-outline-success" onClick={registro}>Registrarse</button>
                    </div>
                </div>
            </div>
        </>
    )
}