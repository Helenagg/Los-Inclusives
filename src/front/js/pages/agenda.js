import React from "react";
import { CardPictogramas } from "../component/cardPictogramas";
import { Link } from "react-router-dom";

export const Agenda = () => {
  return (
    <>
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
        <div className="botonJuego">
          <Link className="btn btn-outline-success m-3" to="/juegos">
            Te lo ganaste
          </Link>
        </div>
      </div>
    </>
  );
};
