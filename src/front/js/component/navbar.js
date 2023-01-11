import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">TEAyudo<br/>App</span>
				</Link>
				<div className="ml-auto">
					<Link to="/ayuda">
						<button className="btn btn-success">Ayuda</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
