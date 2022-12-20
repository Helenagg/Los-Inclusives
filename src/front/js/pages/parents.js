import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Parents = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate
	useEffect (() =>{
		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token") );
		myHeaders.append("Content-Type", "application/json");
		
		var raw = JSON.stringify({
		  "email": "javim552@gmail.com",
		  "password": "12345"
		});
		
		var requestOptions = {
		  method: 'GET',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};
		
		fetch("https://3001-helenagg-losinclusives-uxilung57a3.ws-eu78.gitpod.io/api/private", requestOptions)
		  .then((response) => response.json())
		  .then((result) => {
			if(!result.correcto){
				navigate("/")
			}
		  })
		  .catch(error => console.log('error', error));

	},[])

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};