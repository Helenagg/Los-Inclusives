import React from "react";
import { useState } from "react";

export const ModificarAgenda = () => {
  const [dia, SetDia] = useState([""]);
  const [turno, SetTurno] = useState([""]);

  function elegirDia(event) {
    const opciones = event.target.options;
    const diaSeleccionado = [];

    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected) {
        diaSeleccionado.push(opciones[i].value);
      }
    }
    SetDia(diaSeleccionado);
  }

  function elegirTurno(event) {
    const opciones = event.target.options;
    const turnoSeleccionado = [];

    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected) {
        turnoSeleccionado.push(opciones[i].value);
      }
    }
    SetTurno(turnoSeleccionado);
  }
  return (
    <div className="app">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          className="btn btn-primary me-md-2"
          type="button"
          Link
          to="/pictogramas"
        >
          PICTOGRAMAS
        </button>
      </div>
      <p>
        <select value={dia} onChange={elegirDia}>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miércoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
        <select value={turno} onChange={elegirTurno}>
          <option>Mañana</option>
          <option>Tarde</option>
          <option>Noche</option>
        </select>
      </p>
      <p>
        DIA :{dia} HORARIO: {turno}
      </p>
    </div>
  );
};
