import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";
import { CardPictogramas } from "./cardPictogramas";

export const Momento = ({ dia, setSemana, setMomento, momentoIndex }) => {
  const momento = ["Mañana", "Tarde", "Noche"];

  return (
    <>
      <div>
       {momentoIndex ? <CardPictogramas descripcion={momento[momentoIndex]} /> : <h1>Se te ha olvidado la prop</h1>}
      </div>
      <div className="momentoDia" style={{ paddingLeft: "30px" }}>
        <div className="mañanas">
          <div>
            {momento.map((element) => {
              return (
                <div
                  onClick={() => {
                    setSemana(dia);
                    setMomento(element);
                  }}
                >
                  <CardPictogramas descripcion={element} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
