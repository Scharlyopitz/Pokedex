import Home from "./assets/components/Home";
import { Route, Routes } from "react-router";
import PokemonStats from "./assets/components/PokemonStats";
import Error from "./assets/components/Error";
import { useState, useEffect } from "react";

function App() {
  const URL = "https://tyradex.vercel.app/api/v1/pokemon";

  async function getAllPokemons() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.filter((poke) => poke.pokedex_id > 0));
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonCategory, setPokemonCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            pokemons={pokemons}
            isLoading={isLoading}
            searchPokemon={searchPokemon}
            setSearchPokemon={setSearchPokemon}
            pokemonCategory={pokemonCategory}
            setPokemonCategory={setPokemonCategory}
          />
        }
      />
      <Route
        path="/PokemonStats/:name"
        element={<PokemonStats pokemons={pokemons} />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
