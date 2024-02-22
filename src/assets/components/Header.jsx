import FilterButtons from "./FilterButtons";

export default function Header({ setSearchPokemon, setPokemonCategory }) {
  return (
    <header>
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Recherche un Pokemon"
        onChange={(e) => setSearchPokemon(e.target.value.toLocaleLowerCase())}
      />
      <FilterButtons setPokemonCategory={setPokemonCategory} />
    </header>
  );
}
