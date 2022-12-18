import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {

    return(
        <>
            <div className="container text-center mt-5">
                <h1 className="text-success">REGISTRO</h1>
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        <input className="form-check-input m-2" type="checkbox"></input>
                        <label className="form-check-label">Padre</label>
                        <input className="form-control mb-3 border border-success" placeholder="Nombre"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Apellidos"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Teléfono"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Dirección"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Email"></input>
                        <input className="form-control mb-3 border border-success" placeholder="Password"></input>
                        <button className="btn btn-outline-success">Registrarse</button>
                    </div>
                </div>
            </div>
        </>
    )
}