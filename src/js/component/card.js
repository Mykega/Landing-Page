import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card-deck pb-4">
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"
					alt="..."></img>
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.card}</p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary btn-sm">
						Find out More!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"></img>
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.card1}</p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary btn-sm">
						Find out More!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"></img>
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.card2}</p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary btn-sm">
						Find out More!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"></img>
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.card3}</p>
				<div className="card-footer ">
					<a
						href={props.buttonUrl}
						className="btn btn-primary btn-sm">
						Find out More!
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	card: PropTypes.string,
	card1: PropTypes.string,
	cardTitle: PropTypes.string,
	card2: PropTypes.string,
	card3: PropTypes.string,
	buttonUrl: PropTypes.string
};
