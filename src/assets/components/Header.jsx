import allTypes from "../Types/Types.json";

export default function Header() {
  const filterPokemons = () => {
    console.log("ok");
  };

  return (
    <header>
      <h1>Pokedex</h1>
      <div className="btn-container">
        {allTypes.map((type, idx) => {
          return (
            <button
              data-type={type.type}
              onClick={filterPokemons}
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
