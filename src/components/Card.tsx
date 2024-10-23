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
				alt={`Representation of ${firstname}`}
			/>
			<figcaption>{firstname}</figcaption>
		</figure>
	);
}

export default Card;
