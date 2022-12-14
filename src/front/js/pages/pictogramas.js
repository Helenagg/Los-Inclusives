import { element } from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardPictogramas } from "../component/cardPictogramas";
import { Link } from "react-router-dom"
import "../../styles/cardPictogramas.css";

export const Pictogramas = (props) => {
  const [buscar, setBuscar] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

    // realizamos búsqueda de todos los pictogramas 
  const busqueda = () => {
    fetch("https://api.arasaac.org/api/pictograms/es/search/" + buscar, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => { 
        setResult(result)
        console.log("resultado", result, result.length > 0)
        if (result.length > 0) {          
          setError("")
        } 
        else {          
          setError("No hay pictogramas con esta palabra, inténtalo con otra")}})
       
      .catch((error) => console.log("error", error));
    
  };

   // enviamos a la tabla Pictogramas el pictograma seleccionado
  const seleccionar = (url) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "categoria": buscar,
      "descripcion": "pictograma",
      "url": url
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://3001-helenagg-losinclusives-riklvtx64l2.ws-eu82.gitpod.io/api/pictogramas", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-3">
            <div className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar pictograma" aria-label="Search"
                onChange={(event) => setBuscar(event.target.value)}
              ></input>
              <button className="btn btn-outline-success" onClick={busqueda}>
                Buscar
              </button>
            </div>
            {result.map((element) => {
              return (
                <>
                  <div className="container d-flex">
                    <div className="row">
                      <CardPictogramas
                      imagen={"https://static.arasaac.org/pictograms/"+element._id+"/"+element._id+"_300.png"}
                      descripcion={
                        <>
                          <p><Link to={"/parents"} style={{textDecoration:"none", border:0}}><button className="btn btn-outline-success" onClick={()=>seleccionar("https://static.arasaac.org/pictograms/"+element._id+"/"+element._id+"_300.png")}>Seleccionar</button></Link></p>
                          {element.keywords?.map((keyword) => {
                            return (                   
                                <p>{keyword.keyword}</p>
                            );
                          })}
                        </>
                      }
                      />  
                    </div> 
                  </div>
                </>
              );
            })}
            <div>
              {error && <div className="alert alert-danger" role="alert">
                      {error} </div>}
            </div>
          </div>    
        </div>
      </div>
    </>
  );
};
