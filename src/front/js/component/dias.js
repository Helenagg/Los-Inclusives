import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";

export const Dia = (props) => {
    return (

      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target={props.diaId}
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          onClick={props.Onclick}
        >
          {props.dia}
        </button>
      </li>
    )
}