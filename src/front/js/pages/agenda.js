import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CardPictogramas } from "../component/cardPictogramas";
import { Momento } from "../component/momento";
import { Dia } from "../component/dias";
import "../../styles/cardPictogramas.css";

import { Context } from "../store/appContext";
import { element } from "prop-types";

export const Agenda = (props) => {
  // const navigate = useNavigate;
  function incrementClick() {
    updateDisplay(++counterVal);
  }

  function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
  }

  function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
  }

  const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer " + localStorage.getItem("token")
  //   );
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     email: "javim552@gmail.com",
  //     password: "12345",
  //   });

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://3001-helenagg-losinclusives-mrjvrjgmddp.ws-eu81.gitpod.io/api/private",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (!result.correcto) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);

  //  -------------------------- LLAMADA A NUESTRA BASE DE DATOS -------------------------------------------------------
  const [usuarios, setUsuarios] = useState({
    nombres: [],
    apellidos: [],
  });
  const [result, setResult] = useState([]);
  const [nombreElegido, setNombreElegido] = useState("");
  const [pictoTest, setPictoTest] = useState([]);
  const [noDUplicatedUsuarios, setNoDUplicatedUsuarios] = useState([]);

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/api/agenda/usuarios`)
      .then((response) => response.json())
      .then((result) => {
        setUsuarios({
          nombres: result.nombres,
          apellidos: result.apellidos,
        });
      });
  }, []);

  const [usuarioElegido, setUsuarioElegido] = useState()
  // onClick{() => getPictogramas(usuario, dia, momento)}
  const getPictogramas = async (usuarioqueconsulta, diadelasemana, momento) => {
    await fetch(`${process.env.BACKEND_URL}/api/${diadelasemana}/${usuarioqueconsulta}/${momento}`)
  }
  useEffect(() => {
    console.log("usuarios", usuarios);
  }, [usuarios]);

  useEffect(() => {
    result.map((el) => el.pictogramas.map((p) => console.log(p.urlP)));

    console.log(" result", result);

    console.log(" pictoTest", pictoTest);
  }, [result]);

  useEffect(() => {
    //Runs only on the first render
    getUsuarios()

  }, []);

  //>>>>>>>>>>>>>>>funciones
  const concatNameApe = () => {
    const nombres = usuarios.nombres;
    const apellidos = usuarios.apellidos;
    const nombreApellido = [];
    for (let i = 0; i < nombres.length; i++) {
      nombreApellido.push(`${nombres[i]} ${apellidos[i]}`);
    }
    return nombreApellido;
  };

  const noDuplicated = () => {
    const nombreApellido = concatNameApe();
    const noDuplicated = [];
    for (let i = 0; i < nombreApellido.length; i++) {
      if (noDuplicated.indexOf(nombreApellido[i]) === -1) {
        noDuplicated.push(nombreApellido[i]);
      }
    }
    return noDuplicated;
  };

  useEffect(() => {
    setNoDUplicatedUsuarios(noDuplicated());
  }, [usuarios]);

  useEffect(() => {
    console.log("no duplicados", noDUplicatedUsuarios)
  }, [noDUplicatedUsuarios])

  const getUsuarios = async () => {
    let finalArray = [];
    fetch(`${process.env.BACKEND_URL}/api/agenda`)
      .then((response) => response.json())
      .then((result) => {
        result.map((childLine) => {
          let duplicate = finalArray.find(
            (element) =>
              element?.nombre == childLine.nombre &&
              element?.apellidos == childLine.apellidos //Y apellidos
          );
          console.log("duplicate", duplicate);
          if (!duplicate) {
            finalArray.push({
              ...childLine,
              //Meter dia de la semana y momento con su nombre bueno
              pictogramas: [
                {
                  url: childLine.urlP,
                  momento: childLine.momentos_del_dia,
                  dia: childLine.dias_semana,
                },
              ],
            });
          } else {
            //misma linea de array pictogramas
            duplicate.pictogramas.push({
              url: childLine.urlP,
              momento: childLine.momentos_del_dia,
              dia: childLine.dias_semana,
            });
          }
        });

        console.log("Final array", finalArray);
        setResult(finalArray);
      })
      .catch((error) => console.log("error", error));
  }
  ///<<<<<<<<<<<<<<Funciones
    


  // ------------------------------- Contador de clicks para boton de juego  -------------------------------------
  // let contador = 0;
  // const contadorClicks = () =>{
  //   contadorTotal = contador ++;

  //       return console.log (contadorTotal)

  // }
  // -------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="mt-3 btn-group">
        <button
          type="button"
          className="ms-5 btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Seleccionar
        </button>
        <ul className="dropdown-menu">
          <li>
            <p className="dropdown-item" href="#">
              {result.map((element, index) => {
                return (
                  <span className="list-group-item" key={index}>
                    {element.nombre} {element.apellidos}
                    <button
                      className="ms-5 btn btn-success"
                      onClick={() => setNombreElegido(element.nombre)}
                    >
                      Ir
                    </button>
                  </span>
                );
              })}
            </p>
          </li>
        </ul>
      </div>

      <ul
        className="nav nav-tabs container-fluid"
        id="myTab"
        role="tablist"
        style={{ width: "fit-content" }}
      >
        {dias.map((dia, index) => (
          <div key={index}>
            <Dia diaId={`#${dia}`} dia={dia} />
          </div>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {dias.map((dia, index) => (
          <div
            key={index}
            className="tab-pane fade show"
            id={dia}
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="diaSemana" style={{ paddingLeft: "40px" }}>
              <i className="far fa-calendar"> {dia}</i>
            </div>

            <div className="row justify-content-start">
              <div className="col-2" key={index}>
                <Momento Key={index}/>
              </div>
              {result.map((finalArray, index) => {
                // if (finalArray.nombre === nombreElegido) {

                // ----------------------------  prueba de si muestra imagen ----------------------------------------------------
                // return (
                // <div className="col-2">
                //   <CardPictogramas
                //     // onClick={contadorClicks()}
                //     imagen="https://laverdadnoticias.com/__export/1604628830534/sites/laverdad/img/2020/11/05/comida_para_perros.jpg_673822677.jpg"/>
                //   <CardPictogramas
                //     // onClick={contadorClicks()}
                //     imagen="https://tse2.mm.bing.net/th?id=OIP.KrZ-MUcoIdiCJV1IUQ_GpwHaEK&pid=Api"
                //   />

                //     </div>
                //     );

                // }
                // -------------------------------------------------------------------------------------------------------------
                if (finalArray.nombre === nombreElegido) {
                  console.log(nombreElegido, finalArray.pictogramas[0]);

                  {
                    finalArray.pictogramas.momento == "Mañana" ? (
                      <div className="col-2" key={index}>
                        <CardPictogramas
                        Key={key}
                          // onClick={contadorClicks()}
                        imagen={finalArray.pictogramas[0].url}
                        />
                      </div>
                    ) : (
                      "hola, no funciono"
                    );
                  }

                  // if (finalArray.pictogramas.momento == "Tarde") {
                  //   return (
                  //     <div className="col-2">
                  //       <CardPictogramas
                  //         // onClick={contadorClicks()}
                  //         imagen={finalArray.pictogramas.url}
                  //       />
                  //     </div>
                  //   );
                  // } else {
                  //   finalArray.pictogramas.momento == "Noche";
                  //   return (
                  //     <div className="col-2">
                  //       <CardPictogramas
                  //         // onClick={contadorClicks()}
                  //         imagen={finalArray.pictogramas.url}
                  //       />
                  //     </div>
                  //   );
                  // }
                }
                // --------------------------------------------------------------------------------------------------------------------
              })}
            </div>
            <div className="botonJuego" key={index}>
              <Link className="btn btn-outline-success m-3" to="/juegos">
                Te lo ganaste
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
