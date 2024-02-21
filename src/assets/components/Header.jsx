import allTypes from "../Types/Types.json";

export default function Header() {
  return (
    <header>
      <h1>Pokedex</h1>
      <div className="btn-container">
        {allTypes.map((type, idx) => {
          return (
            <button style={{ background: `${type.color}` }} key={idx}>
              {type.type}
            </button>
          );
        })}
      </div>
    </header>
  );
}
