import { element } from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardPictogramas } from "./cardPictogramas";
import { Link } from "react-router-dom";
import "../../styles/cardPictogramas.css";

export const Pictogramas = (props) => {
  const [buscar, setBuscar] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  // realizamos búsqueda de todos los pictogramas
  const busqueda = () => {
    fetch("https://api.arasaac.org/api/pictograms/es/search/" + buscar, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
        console.log("resultado", result, result.length > 0);
        if (result.length > 0) {
          setError("");
        } else {
          setError("No hay pictogramas con esta palabra, inténtalo con otra");
        }
      })

      .catch((error) => console.log("error", error));
  };
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col">
            <div className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar pictograma"
                aria-label="Search"
                onChange={(event) => setBuscar(event.target.value)}
              ></input>
              <button className="btn btn-outline-success" onClick={busqueda}>
                Buscar
              </button>
            </div>
          </div>
          <div className="col">
            <h5>Pictogramas añadidos: {count}</h5>
          </div>
          <div className="col">
            <p>
              <Link to="/agenda" className="btn btn-outline-success">
                Agenda creada!
              </Link>
            </p>
          </div>
        </div>
        <div className="container text-center d-flex mt-1">
          <div className="text-center d-flex mt-1">
            <div className="row">
              {result.map((element) => {
                return (
                  <>
                    <CardPictogramas
                      imagen={
                        "https://static.arasaac.org/pictograms/" +
                        element._id +
                        "/" +
                        element._id +
                        "_300.png"
                      }
                      descripcion={
                        <>
                          <p>
                            <Link
                              to={"/parents"}
                              style={{ textDecoration: "none", border: 0 }}
                            >
                              <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                  props.seleccionar(
                                    "https://static.arasaac.org/pictograms/" +
                                      element._id +
                                      "/" +
                                      element._id +
                                      "_300.png"
                                  );
                                  handleIncrement();
                                }}
                              >
                                Seleccionar
                              </button>
                              <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                  props.borrar(
                                    "https://static.arasaac.org/pictograms/" +
                                      element._id +
                                      "/" +
                                      element._id +
                                      "_300.png"
                                  );
                                  handleDecrement();
                                }}
                              >
                                Borrar
                              </button>
                            </Link>
                          </p>
                          {element.keywords?.map((keyword, index) => {
                            
                            return <p style={{textTransform: "capitalize"}}>{index == 0 ? keyword.keyword : null}</p>
                          
                          })}
                        </>
                      }
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
