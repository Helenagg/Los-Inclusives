import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

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
	  <div className="text-center mt-5">
		<h1>VAMOS A ENTRAR</h1>
  
		<div>
		  <lavel>E-mail: </lavel>
		  <input onChange={(event) => setEmail(event.target.value)}></input>
		  <label className="m-2">Contraseña: </label>
		  <input onChange={(event) => setPassword(event.target.value)}></input>
		</div>
  
		<div>
		  <button onClick={Login}>Login</button>
		  {error && (
			<div className="alert alert-danger" role="alert">
			  {error}
			</div>
		  )}
		</div>
	  </div>
	);
  };
  