import { useState } from "react";
import "../assets/styles/Card.css";

interface CardI {
	firstname: string;
	imgSrc: string;
}

function Card({ firstname, imgSrc }: CardI) {
	const [count, setCount] = useState<number>(0);
	return (
		<figure>
			<img
				src={imgSrc}
				alt={`Representation of ${firstname}, a character of the Mario universe`}
			/>
			<figcaption>{firstname}</figcaption>
			<button onClick={() => setCount(count + 1)} type="button">{count} 🪙</button>
		</figure>
	);
}

export default Card;
