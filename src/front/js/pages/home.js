import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import background from "../../img/manos.png";

import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
  
	const Login = () => {
	  console.log(email, password);
	  var myHeaders = new Headers();
	  myHeaders.append("Content-Type", "application/json");
  
	  var raw = JSON.stringify({
		email: email,
		password: password,
	  });
  
	  var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	  };
  
	  fetch(
		"https://3001-helenagg-losinclusives-uxilung57a3.ws-eu78.gitpod.io/api/login",
		requestOptions
	  )
		.then((response) => response.json())
		.then((result) => {
		  if (result.token) {
			localStorage.setItem("token", result.token);
			navigate("/demo");
		  } else {
			setError(result.msg);
		  }
		})
		.catch((error) => console.log("error", error));
	};
  
	return (
		<>
			<div className="container text-center mt-5" style={{backgroundImage: `url(${background})`}}>
				<div className="row justify-content-md-center"> 
					<div className="col-3 border bg-white">
						<h1 className="text-success">LOGIN</h1>
						{/* <label>E-mail: </label> */}
						<input className="form-control mb-3 border border-success" placeholder="Email" Change={(event) => setEmail(event.target.value)}></input>
						{/* <label className="m-2">Contraseña: </label> */}
						<input className="form-control mb-3 border border-success" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)}></input>
						<button className="btn btn-outline-success m-3" onClick={Login}>Login</button>
						<button className="btn btn-outline-success"><Link to={"/signup"} style={{textDecoration: 'none', color: 'green'}}>Registro</Link></button>
						{error && (
							<div className="alert alert-danger" role="alert">
							{error}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
  };
  