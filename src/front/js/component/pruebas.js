import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";
import { CardPictogramas } from "./cardPictogramas";

export const Dia2 = (props) => {
  return (
    <>
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
          {props.dia}
        </button>
      </li>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="lunes"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="diaSemana" style={{ paddingLeft: "40px" }}>
            <i class="far fa-calendar"> {props.diaCalendar}</i>
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
      </div>
    </>
  );
};
