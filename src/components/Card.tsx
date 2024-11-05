import "../assets/styles/Card.css";

function Card(firstname, imgSrc) {
	return (
		<figure>
			<img
				src="J'ai explosé l'application"
				alt={`Representation of ${firstname}, a character of the Mario universe`}
			/>
			<figcaption>Mario Bros</figcaption>
			<button>0 🪙</button>
		</figure>
	);
}

export default Card;
