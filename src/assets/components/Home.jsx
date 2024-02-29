import Loader from "./Loader";
import Cards from "./Cards";
import Header from "./Header";
import { useEffect } from "react";
import DemoPokemon from "./DemoPokemon";

export default function Home({
  setSearchPokemon,
  setPokemonCategory,
  isLoading,
  pokemonCategory,
  searchPokemon,
  pokemons,
}) {
  useEffect(() => {
    document.title = "Pokédex | Home";
  }, []);

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
        <main>
          <DemoPokemon />
          <Cards
            pokemons={pokemons}
            searchPokemon={searchPokemon}
            pokemonCategory={pokemonCategory}
            setSearchPokemon={setSearchPokemon}
          />
        </main>
      )}
    </>
  );
}
