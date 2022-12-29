import React from "react";
import { CardJuegos } from "../component/card";
import "../../styles/tablaJuegos.css";
import { Link } from "react-router-dom";

export const TablaJuejos = () => {
  return (
    <>
    <div className="contenedor">
      <CardJuegos
        imagen="https://tse2.mm.bing.net/th?id=OIP.4K5H9tGJwx9wFszI8FOCiQHaHa&pid=Api"
        titulo="Booble Sorting"
        descripcion="Coloca las bolas de colores en cada probeta"
        url="https://www.crazygames.com/game/bubble-sorting"
      />
      <CardJuegos
        imagen="https://tse3.mm.bing.net/th?id=OIP.OkeYsGjRd0TTAdCmMb6FCwAAAA&pid=Api"
        titulo="Find the Diferences"
        descripcion="Encuentra las diferencias entre dos imagenes"
        url="https://www.agame.com/game/find-the-differences"
      />
      <CardJuegos
        imagen="https://tse3.mm.bing.net/th?id=OIP.e5RvGqVEImSabs6vKg-I1gHaHa&pid=Api"
        titulo="Tangram"
        descripcion="Coloca las piezas en su orden correcto"
        url="https://www.cokitos.com/tangram-online-para-ninos/play/"
      />
    </div>
    <div className = "contenedor-button">
    <Link to="/agenda"><i class="fas fa-calendar-alt"></i></Link>
    </div>
    </>
  );
};
