import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CardPictogramas } from "../component/cardPictogramas";
import { MomentoAgenda } from "../component/momentoAgenda";
import { Dia } from "../component/dias";
import "../../styles/cardPictogramas.css";
import { Context } from "../store/appContext";
import { element } from "prop-types";

export const Agenda = (props) => {
  // const navigate = useNavigate;
  const [pictosMañana, setPictosMañana] = useState([
    "	https://picsum.photos/200",
  ]);
  const [pictosTarde, setPictosTarde] = useState(["	https://picsum.photos/200"]);
  const [pictosNoche, setPictosNoche] = useState(["	https://picsum.photos/200"]);
  const [pictosMezclados, setPictosMezclados] = useState({});
  const [diaElegido, setDiaElegido] = useState("");
  const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  useEffect(() => {
    setPictosMañana(pictosMezclados.mañana);
    setPictosTarde(pictosMezclados.tarde);
    setPictosNoche(pictosMezclados.noche);
  }, [pictosMezclados]);
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
  const [nombreElegido, setNombreElegido] = useState({
    nombre: "",
    apellidos: "",
  });
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

  useEffect(() => {
    getUsuarios();
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
  };

  const getPictosDia = async (dia) => {
    setDiaElegido(dia);
    if (nombreElegido.nombre === "") {
      alert("No se ha elegido un nombre");
    }
    await fetch(
      `${process.env.BACKEND_URL}/api/${dia}/${nombreElegido.nombre}/${nombreElegido.apellidos}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setPictosMezclados(result);
      })
      .catch((error) => console.log("error", error));
  };
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
      {/* Boton  usuarios*/}
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
                  <span
                    className="list-group-item BotonNombre"
                    key={index}
                    onClick={() =>
                      setNombreElegido({
                        nombre: element.nombre,
                        apellidos: element.apellidos,
                      })
                    }
                  >
                    {element.nombre} {element.apellidos}
                  </span>
                );
              })}
            </p>
          </li>
        </ul>
      </div>
      {/* Boton  usuarios*/}
      {/* tabs */}
      <ul
        className="nav nav-tabs container-fluid"
        id="myTab"
        role="tablist"
        style={{ width: "fit-content" }}
      >
        {dias.map((dia, index) => (
          <div key={index}>
            <Dia
              Onclick={() => getPictosDia(dia)}
              diaId={`#${dia}`}
              dia={dia}
            />
          </div>
        ))}
      </ul>
      {/* tabs */}
      {/* Tab content */}
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
              <i className="far fa-calendar">{diaElegido}</i>
            </div>

            <div className="ContenidoAgenda">
              <div className="MomentoFila">
                <div className="MomentoContenedor">
                  <MomentoAgenda momentoIndex={"0"} />
                </div>
                {/* MAÑANA */}
                <div className="PictogramasContenedor">
                  {pictosMañana &&
                    pictosMañana.map((picto, index) => (
                      <div key={index} className="PictoContenedor">
                        <CardPictogramas imagen={picto} />
                      </div>
                    ))}
                </div>
              </div>

              {/* TARDE */}
              <div className="MomentoFila">
                <div className="MomentoContenedor">
                  <MomentoAgenda momentoIndex={"1"} />
                </div>
                <div className="PictogramasContenedor">
                  {pictosTarde &&
                    pictosTarde.map((picto, index) => (
                      <div key={index} className="PictoContenedor">
                        <CardPictogramas imagen={picto} />
                      </div>
                    ))}
                </div>
              </div>
              {/* NOCHE */}
              <div className="MomentoFila">
                <div className="MomentoContenedor">
                  <MomentoAgenda momentoIndex={"2"} />
                </div>
                <div className="PictogramasContenedor">
                  {" "}
                  {pictosNoche &&
                    pictosNoche.map((picto, index) => (
                      <div key={index} className="PictoContenedor">
                        <CardPictogramas imagen={picto} />
                      </div>
                    ))}
                </div>
              </div>
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
