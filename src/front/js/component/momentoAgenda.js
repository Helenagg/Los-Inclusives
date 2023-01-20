import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";
import { CardPictogramas } from "./cardPictogramas";

export const MomentoAgenda = ({ dia, momentoIndex }) => {
  const momento = ["Mañana", "Tarde", "Noche"];

  return (
    <div>
     {momentoIndex ? <CardPictogramas descripcion={momento[momentoIndex]} /> : <h1>Se te ha olvidado la prop</h1>}
    </div>
  );
};
