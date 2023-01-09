import { element } from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardPictogramas } from "../component/cardPictogramas";
import "../../styles/cardPictogramas.css";

export const Pictogramas = (props) => {
  const [buscar, setBuscar] = useState("");
  const [result, setResult] = useState([]);
  // const [url, setUrl] = useState("");

    // realizamos búsqueda de todos los pictogramas 
  const busqueda = () => {
    fetch("https://api.arasaac.org/api/pictograms/es/search/" + buscar, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setResult(result))
      .catch((error) => console.log("error", error));
    console.log(result);
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

    fetch("https://3001-helenagg-losinclusives-13ek3qbc41f.ws-eu81.gitpod.io/api/pictogramas", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  return (
    <>
      <div className="container text-center mt-5">
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
                <CardPictogramas
                imagen={"https://static.arasaac.org/pictograms/"+element._id+"/"+element._id+"_300.png"}
                descripcion={
                  <>
                    <p><button className="btn btn-outline-success" onClick={()=>seleccionar("https://static.arasaac.org/pictograms/"+element._id+"/"+element._id+"_300.png")}>Seleccionar</button></p>
                    {element.keywords?.map((keyword) => {
                      return (                   
                          <p>{keyword.keyword}</p>
                      );
                    })}
                  </>
                }
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
