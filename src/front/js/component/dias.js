import propTypes from "prop-types";
import React from "react";
import "../../styles/cardPictogramas.css";

export const Dia = (props) => {
    return (
        <ul
        class="nav nav-tabs container-fluid"
        id="myTab"
        role="tablist"
        style={{ width: "fit-content" }}
      >
        <li class="nav-item " role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#lunes"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            {props.dia}
          </button>
        </li>
        </ul>   
     
    )
}