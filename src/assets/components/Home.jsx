import Loader from "./Loader";
import Cards from "./Cards";
import Header from "./Header";
import { useEffect, useState } from "react";
import DemoPokemon from "./DemoPokemon";
import ScrollBar from "./ScrollBar";

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

  const [getPokemonHovered, setGetPokemonHovered] = useState("");

  return (
    <>
      <Header
        setSearchPokemon={setSearchPokemon}
        pokemonCategory={pokemonCategory}
        setPokemonCategory={setPokemonCategory}
        searchPokemon={searchPokemon}
      />
      <div className="backGround"></div>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <DemoPokemon getPokemonHovered={getPokemonHovered} />
          <Cards
            pokemons={pokemons}
            searchPokemon={searchPokemon}
            pokemonCategory={pokemonCategory}
            setGetPokemonHovered={setGetPokemonHovered}
          />
          <ScrollBar />
        </main>
      )}
    </>
  );
}
