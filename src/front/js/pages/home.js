import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
// import background from "../../img/manos.png";
import { Manos } from "../component/manos"
import background from "../../img/manos.png";
import "../../styles/index.css";

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
	console.log(store.user)
	const login = () => {
	//   console.log(email, password);
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
		`${process.env.BACKEND_URL}/api/login`,
		requestOptions
	  )
		.then((response) => response.json())
		.then((result) => {
		  if (result.token) {
			localStorage.setItem("token", result.token);
			actions.setUser(result.user);
			navigate("/parents");
		  } else {
			setError(result.msg);
		  }
		})
		.catch((error) => console.log("error", error));
	};
  
	return (
		<>
			<div className="container-fluid text-center mt-5 alto" style={{backgroundImage: `url(https://res.cloudinary.com/djvh4yhoi/image/upload/v1674242978/manitas_alto_contraste_ckn30o.svg)`}}>
				<div className="row justify-content-md-center"> 
					<div className="col-3 p-3 border_login bg-white">
						<h1 className="text_azul">LOGIN</h1>
						<input className="form-check-input m-2" type="checkbox" checked={isChecked} onChange={handleOnChange}></input>
                        <label className="form-check-label">Padre</label>
						<input className="form-control mb-3 border" placeholder="Email" onChange={(event) => setEmail(event.target.value)}></input>
						<input className="form-control mb-3 border" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)}></input>
						<button className="btn m-3" onClick={login}>Login</button>
						<button className="btn"><Link to={"/signup/"} style={{textDecoration: 'none', color: 'white'}}>Registro</Link></button>
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