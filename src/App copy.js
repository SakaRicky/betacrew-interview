import { useState, useEffect } from "react";
import "./App.css";
import { getData } from "./services/data";

function App() {
	const [state, setstate] = useState([]);

	useEffect(() => {
		getData()
			.then(data => {
				setstate(data);
			})
			.catch(error => console.log("error: ", error));
	}, []);

	const categories = state.map(s => s.Category);
	const uniqueCategories = Array.from(new Set(categories));

	return (
		<div className="App">
			<ul>
				{uniqueCategories.map(cat => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
