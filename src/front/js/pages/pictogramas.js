import React, { useState } from "react";

export const Pictogramas = () => {

    const [buscar, setBuscar] = useState("");

    const busqueda = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.arasaac.org/api/pictograms/es/search/dientes", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="container text-center mt-5">
                <div className="col-3">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar pictograma" aria-label="Search" onChange={(event) => setBuscar(event.target.value)}></input>
                        <button className="btn btn-outline-success" type="submit" onClick={busqueda}>Buscar</button>
                    </form>
                    <p></p>
                </div>
            </div>
        </>
    )
}