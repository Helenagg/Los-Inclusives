import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";
import { CardPictogramas } from "./cardPictogramas";

export const MomentoAgenda = ({ dia, momentoIndex }) => {
  const momento = [
    
    
 "Mañana", "Tarde", "Noche"];
 const imagenes = [ "https://tse1.explicit.bing.net/th?id=OIP.uHR2AhnvAQw8_1rH0pNwrgAAAA&pid=Api", "https://tse3.mm.bing.net/th?id=OIP.0ir0hTmusNz7guQXPF_FrQAAAA&pid=Api", "https://tse1.mm.bing.net/th?id=OIP.Pg-g6TpE-49adbjcCBG2SgAAAA&pid=Api"]

  return (
    <div>
     {momentoIndex ? <CardPictogramas descripcion={momento[momentoIndex]} imagen = {imagenes[momentoIndex]}/> : <h1>Se te ha olvidado la prop</h1>}
    </div>
  );
};
