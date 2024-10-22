import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./assets/styles/globals.css";

const rootElement = document.getElementById("root");

if (rootElement === null) {
	throw new Error(
		"The HTML document should begin with a <div></div> with root id",
	);
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
