import React from "react";
import ReactDom from "react-dom";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Boostrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							{" "}
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"></a>
					</li>
				</ul>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="navbar-brand" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
