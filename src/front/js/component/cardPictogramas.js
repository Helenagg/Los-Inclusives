import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cardPictogramas.css";

export const CardPictogramas = (props) => {

    return (
      <>
        {/* <div className = "cardPictogramas col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={props.Key}> */}
        <div className="col">
        <div className = "cardPictogramas" key={props.Key}>
          <div className ="card">
            <figure>
              <img src = {props.imagen}/>
            </figure>
            <div className ="contenido">
              <p>{props.descripcion}</p>
            </div>
          </div>
        </div>
        </div>
        </>
  );
};
