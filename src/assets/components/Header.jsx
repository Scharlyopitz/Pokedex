import FilterButtons from "./FilterButtons";

export default function Header({
  setSearchPokemon,
  pokemonCategory,
  setPokemonCategory,
}) {
  return (
    <header>
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
