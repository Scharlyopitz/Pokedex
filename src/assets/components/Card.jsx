import { useEffect, useState } from "react";
import allTypes from "../Types/Types.json";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, type, setSearchPokemon }) {
  const [color, setColor] = useState([]);

  const callColor = () => {
    allTypes.map((t) => type === `${t.type}` && setColor(t.color));
  };

  useEffect(() => {
    callColor();
  }, [type]);

  return (
    <Link
      onClick={() => setSearchPokemon("")}
      to={`/PokemonStats/${name}`}
      className="card"
      style={{
        border: `3px solid ${color.border}`,
        background: `${color.background}`,
      }}
    >
      <h1>#{id}</h1>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>Type : {type}</p>
    </Link>
  );
}
