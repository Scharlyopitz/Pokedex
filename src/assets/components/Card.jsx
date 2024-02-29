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
      data-id={id}
      to={`/PokemonStats/${name}`}
      className="card"
      style={{
        border: `3px solid ${color.border}`,
        // background: `${color.background}`,
        // boxShadow: `0px 0 30px 5px ${color.border},inset 0px 0 20px ${color.border}`,
      }}
    >
      {/* <div
        className="background"
        style={{ background: `${color.background}` }}
      ></div> */}
      <img src={image} alt={name} />
      <p>N° {id}</p> <p>{name}</p>
      {/* <p>Type : {type}</p> */}
    </Link>
  );
}
