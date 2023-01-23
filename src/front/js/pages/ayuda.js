import React from "react";
import { Link } from "react-router-dom";

export const Ayuda = () => {

    return (
        <>
            <div className="container text-start vh-100" style={{backgroundImage: `url("https://res.cloudinary.com/dmo7sg1on/image/upload/v1674325248/TEAyudo_App_-_Isotipo_qzc6k4.svg")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="col-4 bg-white position-absolute top-50 start-50 translate-middle">
                    <div className="m-3">
                <h2>
                    Como utilizar TEAyudo App:
                </h2>
                <div className="col">
                    <p>
                        <b>1.</b> Para poder acceder a la APP es necesario estar registrado, si todavía no lo estas, pincha <Link to={"/signup/"}> aquí</Link> para hacerlo.
                    </p>
                    <p>
                        <b>2.</b> Una vez registrado, debes iniciar sesión con el usuario y contraseña seleccionado.
                    </p>    
                    <p>
                        <b>3.</b> Como Tutor deberás seleccionar los pictogramas que deseas asignar a la Agenda de la persona que vaya a utilizar la App. Para poder configurarla, tendrás que seleccionar, en primer lugar, el nombre de la persona para la que se vaya a configurar la agenda y, en segundo lugar, el día de la semana que desees. Cada día de la semana está dividido en Mañana, Tarde y Noche. Al seleccionar está opción tendrás acceso a un buscador de Pictogramas.
                    </p>
                    <p>    
                        <b>4.</b> En el buscador de pictogramas deberás indicar una palabra identificativa de aquello que desees encontrar, como por ejemplo, para una tarea como lavarse los dientes, bastará con indicar "dientes". En el desplegable aparecerán todas las opciones, bastará con pinchar en seleccionar para escoger este pictograma concreto.
                    </p>    
                    <p>    
                        <b>5.</b> Cuando considere que la Agenda tiene añadidos todos los pictogramas deseados, deberá pinchar en Agenda creada. La App de llevará a la vista donde la persona que use la Agenda podrá ver todos los Pictogramas.
                    </p>
                    <p>    
                        <b>6.</b> Para dar acceso a los Pictogramos incluidos en la Agenda, deberá seleccionar el nombre de la persona que desee y pichando en cada día de la semana podrá ver todos los Pictogramas seleccionados anteriormente, ordenados en Mañana, Tarde o Noche.
                    </p>
                    <p>
                        <b>7.</b> Cada vez que se realice una tarea, deberá pinchar en el Pictograma realizado y al final del día si se han pinchado un mínimo de X Pictogramas se habilitará el botón para acceder a los juegos.
                    </p>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}