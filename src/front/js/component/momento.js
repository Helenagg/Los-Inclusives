import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";
import { CardPictogramas } from "./cardPictogramas";

export const Momento = ({ dia }) => {
  const momento = ["Mañana", "Tarde", "Noche"];

  return (
    <>
      <div className="momentoDia" style={{ paddingLeft: "30px" }}>
        <div className="mañanas">
          <div>
            {momento.map((element) => {
              return (
                <CardPictogramas descripcion={element} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};
