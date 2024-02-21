import { useState, useEffect } from "react";
import Card from "./assets/components/Card";
import Loader from "./assets/components/Loader";
import Cards from "./assets/components/Cards";

function App() {
  const URL = "https://tyradex.vercel.app/api/v1/pokemon";

  async function getPokemons() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.filter((poke) => poke.pokedexId > 0));
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <h1>Pokedex</h1>
      {isLoading ? <Loader /> : <Cards pokemons={pokemons} />}
    </>
  );
}

export default App;
