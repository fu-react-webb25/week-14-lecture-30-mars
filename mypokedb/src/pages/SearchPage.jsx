import SearchForm from "../components/SearchForm";
import PokemonCard from "../components/PokemonCard";
import { pokemons } from "../data/pokemons";

const SearchPage = () => {
	return (
		<main className="page">
			<h2 className="page__title">Search Pokemon</h2>
			<SearchForm />
			<section className="page__pokedex">
				<PokemonCard pokemon={pokemons[5]} />
				<PokemonCard pokemon={pokemons[2]} />
				<PokemonCard pokemon={pokemons[7]} />
				<PokemonCard pokemon={pokemons[4]} />
				<PokemonCard pokemon={pokemons[87]} />
			</section>
		</main>
	);
};

export default SearchPage;
