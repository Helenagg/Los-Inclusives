import React from "react";
import { Link } from "react-router-dom";

export const Ayuda = () => {

    return (
        <>
            <div className="container text-start">
                <h2>
                    Como utilizar la App de Pictogramas:
                </h2>
                <div className="col">
                    <p>
                        1. Para poder acceder a la APP es necesario estar registrado, si todavía no lo estas, pincha <Link to={"/signup/"}> aquí</Link> para hacerlo.<br/>
                        2. Una vez registrado, debes iniciar sesión con el usuario y contraseña seleccionado.<br/>
                        3. Como Tutor deberás seleccionar los pictogramas que deseas asignar a la Agenda de la persona que vaya a utilizar la App. Para poder configurarla, tendrás que seleccionar, en primer lugar, el nombre de la persona para la que se vaya a configurar la agenda y, en segundo lugar, el día de la semana que desees. Cada día de la semana está dividido en Mañana, Tarde y Noche. Al seleccionar está opción tendrás acceso a un buscador de Pictogramas.<br/>
                        4. El buscador de pictogramas deberás indicar una palabra identificativa de aquello que desees encontrar, como por ejemplo, para una tarea como lavarse los dientes, bastará con indicar "dientes". En el desplegable aparecerán todas las opciones, bastará con pinchar en seleccionar para escoger este pictograma concreto.<br/>
                        5. Cuando considere que la Agenda tiene añadidos todos los pictogramas deseados, deberá pinchar en creación Agenda para añadirlos.
                        6. Acceso a la vista de la persona que utilizará la Agenda.
                    </p>
                </div>
            </div>
        </>
    )
}