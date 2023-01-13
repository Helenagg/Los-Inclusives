import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";

export const Dia = (props) => {
    return (
        
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
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