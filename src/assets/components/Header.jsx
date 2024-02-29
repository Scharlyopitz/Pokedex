import FilterButtons from "./FilterButtons";
import PokeballSvg from "/PokeBall.svg";

export default function Header({
  setSearchPokemon,
  pokemonCategory,
  setPokemonCategory,
}) {
  return (
    <header>
      <img src={PokeballSvg} alt="PokeBall" />
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Recherche un Pokemon..."
        onChange={(e) => setSearchPokemon(e.target.value.toLocaleLowerCase())}
      />
      <FilterButtons
        setPokemonCategory={setPokemonCategory}
        pokemonCategory={pokemonCategory}
      />
    </header>
  );
}
