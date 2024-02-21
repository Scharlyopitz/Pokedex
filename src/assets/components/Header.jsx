import { useState } from "react";
import allTypes from "../Types/Types.json";

export default function Header() {
  const [isActive, setIsActive] = useState("");

  const filterPokemons = (e) => {
    setIsActive(e.target.dataset.type);
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
      </div>
    </header>
  );
}
