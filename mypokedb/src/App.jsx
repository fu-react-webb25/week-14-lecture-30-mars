import Footer from "./components/Footer";
import Header from "./components/Header";
import GeneratePage from "./pages/GeneratePage";
import PokedexPage from "./pages/PokedexPage";
import SearchPage from "./pages/SearchPage";

function App() {
	return (
		<section className="app">
			<Header />
			<PokedexPage />
			{/* <GeneratePage /> */}
			{/* <SearchPage /> */}
			<Footer />
		</section>
	);
}

export default App;
