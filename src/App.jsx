import { useState, useEffect } from "react";
import Card from "./assets/components/Card";

function App() {
  const URL = "https://tyradex.vercel.app/api/v1/pokemon/pikachu";

  async function getPokemon() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
  }

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Card pokemon={pokemon} />
        </>
      )}
    </>
  );
}

export default App;
