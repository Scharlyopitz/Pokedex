import { useState, useEffect } from "react";
import Card from "./assets/components/Card";
import Loader from "./assets/components/Loader";
import Types from "./assets/Types/Types.json";

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

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cards_container">
          {pokemons.map((pokemon, idx) => {
            return (
              <Card
                key={idx}
                name={pokemon.name.fr}
                category={pokemon.category}
                image={pokemon.sprites.regular}
                type={pokemon.types[0].name}
                Types={Types}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
