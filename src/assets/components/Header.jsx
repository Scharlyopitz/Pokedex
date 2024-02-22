import { useState } from "react";
import allTypes from "../Types/Types.json";

export default function Header({
  pokemons,
  setPokemons,
  getAllPokemons,
  setIsLoading,
}) {
  const [isActive, setIsActive] = useState("");
  const [cliked, setCliked] = useState(true);

  const filterPokemons = (e) => {
    setCliked(false);
    setIsActive(e.target.dataset.type);

    setPokemons(
      pokemons.filter(
        (pokemon) => pokemon.types[0].name === e.target.dataset.type
      )
    );
  };

  const allPokemons = () => {
    setCliked(true);
    setIsActive();
    setIsLoading(true);
    getAllPokemons();
  };

  return (
    <header>
      <h1>Pokedex</h1>

      <div className="btn-container">
        {allTypes.map((type, idx) => {
          return (
            <button
              className={isActive === `${type.type}` ? "Active" : null}
              data-type={type.type}
              onClick={(e) => {
                filterPokemons(e);
              }}
              style={{ border: `2px solid ${type.color}` }}
              key={idx}
            >
              {type.type}
            </button>
          );
        })}
        <button
          onClick={allPokemons}
          className={`Tout ${cliked ? "Active" : null}`}
        >
          Tout
        </button>
      </div>
    </header>
  );
}
