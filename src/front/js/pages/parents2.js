import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CardPictogramas } from "../component/cardPictogramas";
import { Pictogramas } from "../component/pictogramas";
import { Dia2 } from "../component/pruebas";
import "../../styles/cardPictogramas.css";

import { Context } from "../store/appContext";

export const Parents2 = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate;

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
      <Pictogramas />
      <Dia2 dia="Lunes" diaId="lunes" diaCalendar="lunes"/>
      <Dia2 dia="Martes" diaId="martes" diaCalendar="martes"/>
      <Dia2 dia="Miercoles" diaId="mierecoles" diaCalendar="miercoles"/>
      <Dia2 dia="Jueves" diaId="jueves" diaCalendar="jueves"/>
      <Dia2 dia="Viernes" diaId="viernes" diaCalendar="viernes"/>
      <Dia2 dia="Sabado" diaId="sabado" diaCalendar="sabado"/>
      <Dia2 dia="Domingo" diaId="domingo" diaCalendar="domingo"/>
      
    </>
  );
};