import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./Cards";
import Card from "./Card";
import Header from "./Header";

export default function Home() {
  const URL = "https://tyradex.vercel.app/api/v1/pokemon";

  async function getAllPokemons() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.filter((poke) => poke.pokedexId > 0));
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonCategory, setPokemonCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header
        setSearchPokemon={setSearchPokemon}
        setPokemonCategory={setPokemonCategory}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Cards
          pokemons={pokemons}
          searchPokemon={searchPokemon}
          pokemonCategory={pokemonCategory}
        />
      )}
    </>
  );
}
