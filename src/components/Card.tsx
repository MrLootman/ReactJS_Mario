import "../assets/styles/Card.css";

interface CardI {
	firstname: string;
	imgSrc: string;
}

function Card({ firstname, imgSrc }: CardI) {
	return (
		<figure>
			<img
				src={imgSrc}
				alt={`Representation of ${firstname}, a character of the Mario universe`}
			/>
			<figcaption>{firstname}</figcaption>
			<button>0 🪙</button>
		</figure>
	);
}

export default Card;
