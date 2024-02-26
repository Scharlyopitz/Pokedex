import Loader from "./Loader";
import Cards from "./Cards";
import Header from "./Header";

export default function Home({
  setSearchPokemon,
  setPokemonCategory,
  isLoading,
  pokemonCategory,
  searchPokemon,
  pokemons,
}) {
  return (
    <>
      <Header
        setSearchPokemon={setSearchPokemon}
        pokemonCategory={pokemonCategory}
        setPokemonCategory={setPokemonCategory}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Cards
          pokemons={pokemons}
          searchPokemon={searchPokemon}
          pokemonCategory={pokemonCategory}
          setSearchPokemon={setSearchPokemon}
        />
      )}
    </>
  );
}
