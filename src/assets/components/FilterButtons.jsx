import allTypes from "../Types/Types.json";
import { useState } from "react";

export default function FilterButtons({ setPokemonCategory, setIsLoading }) {
  const [isActive, setIsActive] = useState("");

  const getPokemonType = (e) => {
    setPokemonCategory(e.target.dataset.type);
    setIsActive(e.target.dataset.type);
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 250);
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
            style={{ border: `2px solid ${type.color.border}` }}
            key={idx}
          >
            {type.type}
          </button>
        );
      })}
      <button
        data-type="All"
        onClick={(e) => {
          getPokemonType(e);
        }}
        className={`Tout ${isActive === `All` ? "Active" : null}`}
      >
        Tout
      </button>
    </div>
  );
}
