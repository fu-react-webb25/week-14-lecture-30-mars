import GenerateForm from "../components/GenerateForm";
import { pokemons } from "../data/pokemons";
import PokemonCard from "../components/PokemonCard";

const GeneratePage = () => {
	return (
		<main className="page">
			<h2 className="page__title">Generate Your Team</h2>
			<GenerateForm />
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

export default GeneratePage;
