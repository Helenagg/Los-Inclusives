import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cardPictogramas.css"

export const CardPictogramas = (props) => {

    return (
        <div className = "cardPictogramas">
          <div className ="card">
            <figure>
              <Link to= "/pictogramas"><img src = {props.imagen}/></Link>
            </figure>
            <div className ="contenido">
              {/* <p>{props.descripcion}</p>            */}
              <button>Seleccionar</button>
            </div>
          </div>
        </div>
       
    
    )
}