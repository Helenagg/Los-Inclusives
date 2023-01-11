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
	const [isChecked, setIsChecked] = useState(false);
	const [error, setError] = useState("");

	const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
  
	const login = () => {
	  console.log(email, password);
	  var myHeaders = new Headers();
	  myHeaders.append("Content-Type", "application/json");
  
	  var raw = JSON.stringify({
		"email": email,
		"password": password,
		"is_parents": isChecked
	  });
  
	  var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	  };
  
	  fetch(
		"https://3001-helenagg-losinclusives-13ek3qbc41f.ws-eu80.gitpod.io/api/login",
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
						<input className="form-check-input m-2" type="checkbox" checked={isChecked} onChange={handleOnChange}></input>
                        <label className="form-check-label">Padre</label>
						<input className="form-control mb-3 border border-success" placeholder="Email" onChange={(event) => setEmail(event.target.value)}></input>
						<input className="form-control mb-3 border border-success" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)}></input>
						<button className="btn btn-outline-success m-3" onClick={login}>Login</button>
						<button className="btn btn-outline-success"><Link to={"/signup/"} style={{textDecoration: 'none', color: 'green'}}>Registro</Link></button>
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