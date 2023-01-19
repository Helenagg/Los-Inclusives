import propTypes from "prop-types";
import React, { useState } from "react";
import "../../styles/cardPictogramas.css";

export const Dia = (props) => {
  const [elegirDia, setElegirDia] = useState ("");
  console.log(elegirDia)

    return (
        
      <li className="nav-item" role="presentation">
        <button
          className="nav-link text_azul"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target={props.diaId}
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          {props.dia}
        </button>
      </li>
    )
}