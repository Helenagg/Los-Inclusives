import React, { Component } from "react";
import { LogoGrande } from "./logoGrande";

export const Footer = () => (
	// <footer className="footer mt-auto py-3 text-center fondo">
	// 	<div className="container">
	// 		<div className="row">
	// 		{/* Made with <i className="fa fa-heart text-danger" /> by{" "}
	// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>		 */}
	// 		<LogoGrande style={{height: 50}}/>
	// 		<div className="ml_auto">
	// 				Thanks to <a href="https://arasaac.org/" >© ARASAAC - Gobierno de Aragón, 2023</a>
	// 		</div>
	// 		</div>
	// 	</div>	
	// </footer>

	<nav className="footer navbar fondo w-100">
			<div className="container">
				<div className="ml-auto">
					Thanks to <a href="https://arasaac.org/" target="_blank" style={{textDecoration: "none", color: "black"}}>© ARASAAC - Gobierno de Aragón, 2023</a>
				</div>
				<div className="ml-auto">
					<span className="navbar-brand mb-0 h1"><LogoGrande style={{height: 50}}/></span>
				</div>
			</div>
		</nav>
);
