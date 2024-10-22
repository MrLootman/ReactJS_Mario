import "../assets/styles/Card.css";

function Card({ myName }) {
	return (
		<figure>
			<img
				src="https://media.istockphoto.com/id/458294725/fr/photo/super-mario.jpg?s=612x612&w=0&k=20&c=mZf-iNR-FvTV_u_Yih4Sy0LGG6oLsqWDV0ziKnFDNtU="
				alt=""
			/>
			<figcaption>Mario</figcaption>
		</figure>
	);
}

export default Card;
