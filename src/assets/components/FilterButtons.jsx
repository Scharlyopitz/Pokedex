import allTypes from "../Types/Types.json";

export default function FilterButtons({ setPokemonCategory, pokemonCategory }) {
  const getPokemonType = (e) => {
    setPokemonCategory(e.target.value);
  };

  return (
    <div className="btn-container">
      <select
        onChange={(e) => {
          getPokemonType(e);
        }}
        value={pokemonCategory}
      >
        <option value="All">Tout</option>

        {allTypes.map((type, idx) => {
          return (
            <option key={idx} value={type.type}>
              {type.type}
            </option>
          );
        })}
      </select>
    </div>
  );
}
