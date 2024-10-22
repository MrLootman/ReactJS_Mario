import "../assets/styles/Header.css";

function Header() {
	return (
		<header>
			<img
				src="https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg"
				alt="Logo"
			/>
			<nav>
				<a href="/">Home</a>
				<a href="/contact">Contact us</a>
			</nav>
		</header>
	);
}

export default Header;
