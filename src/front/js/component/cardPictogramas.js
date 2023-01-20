import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cardPictogramas.css";

export const CardPictogramas = (props) => {

    return (
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

  );
};
