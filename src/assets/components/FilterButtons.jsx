import allTypes from "../Types/Types.json";
import { useState } from "react";

export default function FilterButtons({
  pokemons,
  setPokemons,
  getAllPokemons,
  setIsLoading,
  setPokemonCategory,
}) {
  const [isActive, setIsActive] = useState("");
  const [cliked, setCliked] = useState(true);

  //   const filterPokemons = (e) => {
  //     setCliked(false);
  //     setIsActive(e.target.dataset.type);
  //     setPokemonCategory(e.target.dataset.type);

  //     setPokemons(
  //       pokemons.filter(
  //         (pokemon) => pokemon.types[0].name === e.target.dataset.type
  //       )
  //     );
  //   };

  //   const allPokemons = () => {
  //     setCliked(true);
  //     setIsActive();
  //     setIsLoading(true);
  //     getAllPokemons();
  //   };

  const getPokemonType = (e) => {
    setPokemonCategory(e.target.dataset.type);
  };

  return (
    <div className="btn-container">
      {allTypes.map((type, idx) => {
        return (
          <button
            className={isActive === `${type.type}` ? "Active" : null}
            data-type={type.type}
            onClick={(e) => {
              getPokemonType(e);
            }}
            style={{ border: `2px solid ${type.color}` }}
            key={idx}
          >
            {type.type}
          </button>
        );
      })}
      <button
        onClick={(e) => {
          getPokemonType(e);
        }}
        className={`Tout ${cliked && "Active"}`}
      >
        Tout
      </button>
    </div>
  );
}
