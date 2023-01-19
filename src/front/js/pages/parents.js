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
  const [dia, setDia] = useState("");
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
      "https://3001-helenagg-losinclusives-mrjvrjgmddp.ws-eu81.gitpod.io/api/private",
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

  return (
    <>
      <div className="mt-3 btn-group">
        <button
          type="button"
          className="ms-5 btn btn-success dropdown-toggle"
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
                className="form-control mb-1 border border-success"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              ></input>
            </p>
          </li>
          <li>
            <p className="dropdown-item" href="#">
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
          className="ms-2 btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Mostrar
        </button>
        <ul className="dropdown-menu">
          <li>
            <p className="dropdown-item" href="#">
              Nombre del niñ@ que creemos
            </p>
          </li>
        </ul>
      </div>
      <Pictogramas />
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
            <div className="diaSemana" style={{ paddingLeft: "40px" }}>
              <i className="far fa-calendar"> {dia}</i>
            </div>
            <Momento />
          </div>
        ))}
      </div>
    </>
  );
};
