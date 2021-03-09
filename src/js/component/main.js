import React from "react";
import ReactDOM from "react-dom";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Main() {
	return (
		<div>
			<Navbar />
			<div className="container p-3 mt-1">
				<Jumbotron />
				<Card
					card="Hello"
					card1="Prueba 1"
					cardTitle="Prueba 2"
					card2="Prueba 3"
					card3="Prueba 4"
					buttonUrl="Url"
				/>
				
			</div>
			<div className="bd-footer text-center text-sm-star">
				<Footer />
			</div>
		</div>
	);
}
