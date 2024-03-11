import FilterButtons from "./FilterButtons";

export default function Header({
  setSearchPokemon,
  pokemonCategory,
  setPokemonCategory,
  searchPokemon,
}) {
  return (
    <header>
      <div className="search">
        <h1>POKEDEX</h1>
        <input
          value={searchPokemon}
          type="text"
          placeholder="Recherche un Pokemon..."
          onChange={(e) => setSearchPokemon(e.target.value.toLocaleLowerCase())}
        />
      </div>

      <FilterButtons
        setPokemonCategory={setPokemonCategory}
        pokemonCategory={pokemonCategory}
      />
    </header>
  );
}
