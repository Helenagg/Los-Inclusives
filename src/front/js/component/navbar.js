import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./logo";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-white">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><Logo style={{height: 70}}/></span>
				</Link>
				<div className="ml-auto">
					<Link to="/ayuda">
						<button className="btn btn-white">Uso de la App</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
