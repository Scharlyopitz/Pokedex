import { useEffect, useState } from "react";
import allTypes from "../Types/Types.json";

export default function Card({ name, category, image, type }) {
  const [color, setColor] = useState();

  useEffect(() => {
    allTypes.map((t) => type === `${t.type}` && setColor(`${t.color}`));
  }, []);

  return (
    <div className="card" style={{ background: `${color}` }}>
      <img src={image} alt={name} />
      <p>{category}</p>
      <h1>{name}</h1>
    </div>
  );
}
