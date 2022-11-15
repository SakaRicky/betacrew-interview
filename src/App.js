import { useState, useEffect } from "react";
import "./App.css";
import { ComponentOne } from "./components/ComponentOne/ComponentOne";
import { ComponentTwo } from "./components/componentTwo/ComponentTwo";

function App() {
	const [state, setstate] = useState([]);

	useEffect(() => {}, []);

	return (
		<div className="App">
			<section>
				<h2>Component One</h2>
				<ComponentOne />
			</section>

			<section style={{ marginTop: "2rem" }}>
				<h2>Component Two</h2>
				<ComponentTwo />
			</section>
		</div>
	);
}

export default App;
