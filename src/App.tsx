import Card from "./components/Card";
import Header from "./components/Header";

import "./assets/styles/App.css";

function App() {

	const myName = {
		firstname: "Nicolas",
		lastname: "MICHEL"
	}

	return (
		<>
			<Header />
			<main>
				<Card character={myName} />
				<Card />
				<Card />
			</main>
		</>
	);
}

export default App;
