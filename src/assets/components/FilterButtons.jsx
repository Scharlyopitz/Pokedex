import allTypes from "../Types/Types.json";

export default function FilterButtons({ setPokemonCategory, pokemonCategory }) {
  const getPokemonType = (e) => {
    setPokemonCategory(e.target.dataset.type);
  };

  return (
    <div className="btn-container">
      {allTypes.map((type, idx) => {
        return (
          <button
            className={pokemonCategory === `${type.type}` ? "Active" : null}
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
        className={`Tout ${pokemonCategory !== `All` ? null : "Active"}`}
      >
        Tout
      </button>
    </div>
  );
}
