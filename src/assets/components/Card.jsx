import { useEffect, useState } from "react";
import allTypes from "../Types/Types.json";

export default function Card({ id, name, image, type }) {
  const [color, setColor] = useState();

  const callColor = () => {
    allTypes.map((t) => type === `${t.type}` && setColor(`${t.color}`));
  };

  useEffect(() => {
    callColor();
  }, []);

  return (
    <div className="card" style={{ border: `3px solid ${color}` }}>
      <h1>#{id}</h1>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>Type : {type}</p>
    </div>
  );
}
