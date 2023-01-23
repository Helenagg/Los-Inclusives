import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CardPictogramas } from "../component/cardPictogramas";
import { Pictogramas } from "../component/pictogramas";
import { Momento } from "../component/momento";
import { Dia } from "../component/dias";
import "../../styles/cardPictogramas.css";

import { Context } from "../store/appContext";
import { element } from "prop-types";

export const Parents = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate;
  const [semana, setSemana] = useState("");
  const [momento, setMomento] = useState("");
  const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

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
      `${process.env.BACKEND_URL}/api/private`,
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

  // enviamos a la tabla Pictogramas el pictograma seleccionado
  const seleccionar = (url) => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      dias_semana: semana,
      momentos_del_dia: momento,
      nombre: name,
      apellidos: surname,
      urlP: url,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.BACKEND_URL}/api/agenda`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
//BORRAR PICTOGRAMAS
  const borrar = (url) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      dias_semana: semana,
      momentos_del_dia: momento,
      nombre: name,
      apellidos: surname,
      urlP: url,
    });
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      `${process.env.BACKEND_URL}/api/agenda`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      
      <div className="mt-3 btn-group">
        <button
          type="button"
          className="ms-5 btn dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Agregar
        </button>
        <ul className="dropdown-menu">
          <li>
            <p className="dropdown-item" href="#">
              Nombre :{" "}
              <input
                className="form-control mb-1 border"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              ></input>
            </p>
          </li>
          <li>
            <p className="dropdown-item" href="#">
              Apellidos :{" "}
              <input
                className="form-control mb-1 border"
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
          className="ms-2 btn dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Mostrar
        </button>
        <ul className="dropdown-menu">
          <li>
            <p className="dropdown-item" href="#">
              {name} {surname}
            </p>
          </li>
        </ul>
      </div>
      <ul
        className="nav nav-tabs container-fluid"
        id="myTab"
        role="tablist"
        style={{ width: "fit-content" }}
      >
        {dias.map((dia) => (
          <Dia diaId={`#${dia}`} dia={dia} />
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {dias.map((dia) => (
          
            <div
              className="tab-pane fade show"
              id={dia}
              role="tabpanel"
              aria-labelledby="home-tab"
            >
            <div className="row justify-content-start mt-3">
              <div className="col-3">
                <nav className="navbar position-static">
                  <div className="diaSemana" style={{ paddingLeft: "40px" }}>
                    <i class="far fa-calendar"> {dia}</i>
                    <Momento dia={dia} setSemana={setSemana} setMomento={setMomento}/>
                    {/* {name}{surname}{momento}{semana} */}
                  </div>
                </nav>
              </div>
              <div className="col-8">
                <Pictogramas 
                  seleccionar={seleccionar}
                  borrar={borrar}
                />
              </div>
            </div>
          </div>  
        ))}
      </div>
    </>
  );
};
