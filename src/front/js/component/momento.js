import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";
import { CardPictogramas } from "./cardPictogramas";

export const Momento = ({ dia }) => {
  const momento = ["Mañana", "Tarde", "Noche"];

  return (
    <>
      <div
        class="tab-pane fade show"
        id={dia}
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="diaSemana" style={{ paddingLeft: "40px" }}>
          <i class="far fa-calendar"> {dia}</i>
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
    </>
  );
};
