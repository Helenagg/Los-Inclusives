import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
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
    //const [error, setError] = useState("");

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

        fetch(`${process.env.BACKEND_URL}/api/signup`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.message) navigate("/")
        })
        .catch(error => console.log('error', error));
    }

    return(
        <>
            <div className="container-fluid text-center mt-5 alto" style={{backgroundImage: `url(https://res.cloudinary.com/djvh4yhoi/image/upload/v1674242978/manitas_alto_contraste_ckn30o.svg)`}}>
                <div className="row justify-content-md-center">
                    <div className="col-3 p-3 border_login bg-white position-absolute top-50 start-50 translate-middle">
                    <h1 className="text_azul">REGISTRO</h1>
                        <input className="form-check-input m-2" type="checkbox" checked={isChecked} onChange={handleOnChange}></input>
                        <label className="form-check-label">Padre</label>
                        <input className="form-control mb-3 border" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)}></input>
                        <input className="form-control mb-3 border" placeholder="Apellidos" onChange={(event) => setApellidos(event.target.value)}></input>
                        <input className="form-control mb-3 border" placeholder="Teléfono" onChange={(event) => setTelefono(event.target.value)}></input>
                        <input className="form-control mb-3 border" placeholder="Dirección" onChange={(event) => setDireccion(event.target.value)}></input>
                        <input className="form-control mb-3 border" placeholder="Email" onChange={(event) => setEmail(event.target.value)}></input>
                        <input className="form-control mb-3 border" placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
                        <button className="btn" onClick={registro}>Registrarse</button>
                    </div>
                </div>
            </div>
        </>
    )
}