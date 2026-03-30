import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GeneratePage from "./pages/GeneratePage";
import PokedexPage from "./pages/PokedexPage";
import SearchPage from "./pages/SearchPage";

function App() {
	const [displayPokedex, setDisplayPokedex] = useState(true);
	const [displayGenerate, setDisplayGenerate] = useState(false);
	const [displaySearch, setDisplaySearch] = useState(false);

	const handleRouting = (page) => {
		if(page === 'Pokedex') {
			setDisplayPokedex(true);
			setDisplayGenerate(false);
			setDisplaySearch(false);
		} else if(page === 'Generate Team') {
			setDisplayPokedex(false);
			setDisplayGenerate(true);
			setDisplaySearch(false);	
		} else if(page === 'Search Pokemon') {
			setDisplayPokedex(false);
			setDisplayGenerate(false);
			setDisplaySearch(true);
		}
	}

	return (
		<section className="app">
			<Header handleRouting={ handleRouting } />
			{
				displayPokedex
				? <PokedexPage />
				: displayGenerate
				? <GeneratePage />
				: displaySearch 
				? <SearchPage />
				: ''
			}
			<Footer />
		</section>
	);
}

export default App;
