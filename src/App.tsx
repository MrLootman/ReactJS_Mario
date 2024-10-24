import Card from "./components/Card";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<main>
				<Card firstname="Bowser" imgSrc="https://mariopartylegacy.com/wp-content/uploads/2018/07/bowserprofile.png" />
				<Card firstname="Mario" imgSrc="https://media.istockphoto.com/id/458294725/fr/photo/super-mario.jpg?s=612x612&w=0&k=20&c=mZf-iNR-FvTV_u_Yih4Sy0LGG6oLsqWDV0ziKnFDNtU=" />
				<Card firstname="Peach" imgSrc="https://generation-nintendo.com/images/encyclopedie/54s7qi8a.png" />
			</main>
		</>
	);
}

export default App;
