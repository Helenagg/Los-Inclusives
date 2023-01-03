import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Pictogramas = () => {

    const [buscar, setBuscar] = useState("");
    const [result, setResult] = useState({})

    const busqueda = () => {
        var raw = "";

        var requestOptions = {
        method: 'GET',
        body: raw,
        redirect: 'follow'
        };

        fetch("https://api.arasaac.org/api/pictograms/es/search/dientes", requestOptions)
        .then(response => response.json())
        .then(result => setResult(result))
        .catch(error => console.log('error', error));
        console.log(result)
    }

    return (
        <>
            <div className="container text-center mt-5">
                <div className="col-3">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar pictograma" aria-label="Search" onChange={(event) => setBuscar(event.target.value)}></input>
                        <button className="btn btn-outline-success" onClick={busqueda}>Buscar</button>
                    </form>
                    <p>{result?.created}</p>
                </div>
            </div>
        </>
    )
}