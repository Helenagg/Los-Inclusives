import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CardPictogramas } from "../component/cardPictogramas";
import "../../styles/cardPictogramas.css";

import { Context } from "../store/appContext";

export const Parents = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate;
  const [buscar, setBuscar] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: "javim552@gmail.com",
      password: "12345",
    });

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://3001-helenagg-losinclusives-uxilung57a3.ws-eu78.gitpod.io/api/private",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (!result.correcto) {
          navigate("/");
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

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
      "dias_semana": dias_semana,
      "momentos_del_dia": momentos_del_dia,
      "nombre": name,
      "apellidos": surname,
      "urlP": url
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://3001-helenagg-losinclusives-riklvtx64l2.ws-eu82.gitpod.io/api/agenda", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <div class="mt-3 btn-group">
        <button
          type="button"
          class="ms-5 btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Agregar
        </button>
        <ul class="dropdown-menu">
          <li>
            <p class="dropdown-item" href="#">
              Nombre :{" "}
              <input
                className="form-control mb-1 border border-success"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              ></input>
            </p>
          </li>
          <li>
            <p class="dropdown-item" href="#">
              Apellidos :{" "}
              <input
                className="form-control mb-1 border border-success"
                placeholder="Surname"
                onChange={(event) => setSurname(event.target.value)}
              ></input>
            </p>
          </li>
          <li>
            <button className="btn btn-outline-success m-3">Agregar</button>
          </li>
        </ul>
        <button
          type="button"
          class="ms-2 btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Mostrar
        </button>
        <ul class="dropdown-menu">
          <li>
            <p class="dropdown-item" href="#">
              Nombre del niñ@ que creemos
            </p>
          </li>
        </ul>
      </div>
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
                          <p><button className="btn btn-outline-success" onClick={()=>seleccionar("https://static.arasaac.org/pictograms/"+element._id+"/"+element._id+"_300.png")}>Seleccionar</button></p>
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
      <ul
        class="nav nav-tabs container-fluid"
        id="myTab"
        role="tablist"
        style={{ width: "fit-content" }}
      >
        <li class="nav-item " role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#lunes"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Lunes
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#martes"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Martes
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#miercoles"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Miercoles
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#jueves"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Jueves
          </button>
        </li>{" "}
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#viernes"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Viernes
          </button>
        </li>{" "}
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#sabado"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Sabado
          </button>
        </li>{" "}
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#domingo"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Domingo
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="lunes"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="diaSemana" style={{ paddingLeft: "40px" }}>
            <i class="far fa-calendar"> Lunes</i>
          </div>
          <div className="momentoDia" style={{ paddingLeft: "30px" }}>
            <div className="mañanas">
              <div to= "/pictogramas">
                <CardPictogramas descripcion="Mañana" />
              </div>
            </div>
            <div className="tardes">
              <div to= "/pictogramas">
                <CardPictogramas descripcion="Tarde" />
              </div>
            </div >
            <div className="noches">
              <div to= "/pictogramas">
                <CardPictogramas descripcion="Noche" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="martes"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="diaSemana" style={{ paddingLeft: "40px" }}>
            <i class="far fa-calendar"> Martes</i>
          </div>
          <div className="momentoDia" style={{ paddingLeft: "30px" }}>
            <div className="mañanas">
              <CardPictogramas descripcion="Mañana" />
            </div>
            <div className="tardes">
              <CardPictogramas descripcion="Tarde" />
            </div>
            <div className="noches">
              <CardPictogramas descripcion="Noche" />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="miercoles"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="diaSemana" style={{ paddingLeft: "40px" }}>
            <i class="far fa-calendar"> Miercoles</i>
          </div>
          <div className="momentoDia" style={{ paddingLeft: "30px" }}>
            <div className="mañanas">
              <CardPictogramas descripcion="Mañana" />
            </div>
            <div className="tardes">
              <CardPictogramas descripcion="Tarde" />
            </div>
            <div className="noches">
              <CardPictogramas descripcion="Noche" />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="jueves"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="diaSemana" style={{ paddingLeft: "40px" }}>
            <i class="far fa-calendar"> Jueves</i>
          </div>
          <div className="momentoDia" style={{ paddingLeft: "30px" }}>
            <div className="mañanas">
              <CardPictogramas descripcion="Mañana" />
            </div>
            <div className="tardes">
              <CardPictogramas descripcion="Tarde" />
            </div>
            <div className="noches">
              <CardPictogramas descripcion="Noche" />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="viernes"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="diaSemana" style={{ paddingLeft: "40px" }}>
            <i class="far fa-calendar"> Viernes</i>
          </div>
          <div className="momentoDia" style={{ paddingLeft: "30px" }}>
            <div className="mañanas">
              <CardPictogramas descripcion="Mañana" />
            </div>
            <div className="tardes">
              <CardPictogramas descripcion="Tarde" />
            </div>
            <div className="noches">
              <CardPictogramas descripcion="Noche" />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="sabado"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="diaSemana" style={{ paddingLeft: "40px" }}>
            <i class="far fa-calendar"> Sabado</i>
          </div>
          <div className="momentoDia" style={{ paddingLeft: "30px" }}>
            <div className="mañanas">
              <CardPictogramas descripcion="Mañana" />
            </div>
            <div className="tardes">
              <CardPictogramas descripcion="Tarde" />
            </div>
            <div className="noches">
              <CardPictogramas descripcion="Noche" />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="domingo"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="diaSemana" style={{ paddingLeft: "40px" }}>
            <i class="far fa-calendar"> Domingo</i>
          </div>
          <div className="momentoDia" style={{ paddingLeft: "30px" }}>
            <div className="mañanas">
              <CardPictogramas descripcion="Mañana" />
            </div>
            <div className="tardes">
              <CardPictogramas descripcion="Tarde" />
            </div>
            <div className="noches">
              <CardPictogramas descripcion="Noche" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
