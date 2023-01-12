import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CardPictogramas } from "../component/cardPictogramas";
import { Pictogramas } from "../component/pictogramas";
import { Dia } from "../component/dias";
import "../../styles/cardPictogramas.css";

import { Context } from "../store/appContext";

export const Parents = (props) => {
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
              <div to="/pictogramas">
                <CardPictogramas descripcion="Mañana" />
              </div>
            </div>
            <div className="tardes">
              <div to="/pictogramas">
                <CardPictogramas descripcion="Tarde" />
              </div>
            </div>
            <div className="noches">
              <div to="/pictogramas">
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
