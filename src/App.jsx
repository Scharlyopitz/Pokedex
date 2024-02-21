import { useState, useEffect } from "react";
import Card from "./assets/components/Card";

function App() {
  const [pokemon, setPokemon] = useState([]);
  console.log(pokemon);

  URL = "https://tyradex.vercel.app/api/v1/pokemon/pikachu";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((res) => setPokemon(res));
  }, [URL]);

  return (
    <>
      <h1>Pokemon</h1>
      {/* <Card pokemon={pokemon} /> */}
    </>
  );
}

export default App;
