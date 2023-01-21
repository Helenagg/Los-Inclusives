import React from "react";
import "../../styles/card.css"

export const CardJuegos = (props) => {

    return (
        
        <div className ="card">
          <figure>
            <img src = {props.imagen}/>
          </figure>
          <div className ="contenido">
            <h5>{props.titulo}</h5>
            <p>{props.descripcion}</p>
            <a href = {props.url} target="_blank">¡A JUGAR!</a>
          </div>
        </div>
       
    
    )
}