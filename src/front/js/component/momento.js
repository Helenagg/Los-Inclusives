import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";
import { CardPictogramas } from "./cardPictogramas";

export const Momento = ({ dia, setSemana, setMomento}) => {
  const momento = [
    {momentoDia : "Mañana", urlmomento : "https://tse1.explicit.bing.net/th?id=OIP.uHR2AhnvAQw8_1rH0pNwrgAAAA&pid=Api"},
    {momentoDia : "Tarde", urlmomento : "https://tse3.mm.bing.net/th?id=OIP.0ir0hTmusNz7guQXPF_FrQAAAA&pid=Api"},
    {momentoDia : "Noche", urlmomento : "https://tse1.mm.bing.net/th?id=OIP.Pg-g6TpE-49adbjcCBG2SgAAAA&pid=Api"}];

  return (
    <>
    
      <div className="momentoDia offset-1">
        <div className="mañanas">
          <div>
            {momento.map((element) => {
              return (
                <div
                  onClick={() => {
                    setSemana(dia);
                    setMomento(element.momentoDia);
                  }}
                >
                  <CardPictogramas descripcion={element.momentoDia} imagen= {element.urlmomento}  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
