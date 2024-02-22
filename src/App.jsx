import { useState, useEffect } from "react";
import Loader from "./assets/components/Loader";
import Cards from "./assets/components/Cards";
import Header from "./assets/components/Header";

function App() {
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

export default App;
