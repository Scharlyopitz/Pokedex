import FilterButtons from "./FilterButtons";

export default function Header({
  pokemons,
  setPokemons,
  getAllPokemons,
  setIsLoading,
  setSearchPokemon,
}) {
  return (
    <header>
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Recherche un Pokemon"
        onChange={(e) => setSearchPokemon(e.target.value.toLocaleLowerCase())}
      />
      <FilterButtons
        pokemons={pokemons}
        setPokemons={setPokemons}
        getAllPokemons={getAllPokemons}
        setIsLoading={setIsLoading}
      />
    </header>
  );
}
