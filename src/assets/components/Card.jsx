import { useEffect, useState } from "react";

export default function Card({ name, category, image, type, Types }) {
  const [color, setColor] = useState();
  useEffect(() => {
    Types.map((Ty) => type === `${Ty.type}` && setColor(`${Ty.color}`));
  });

  // const color = type === `${Types.type}` && `${Types.color}`;

  return (
    <div className="card" style={{ background: `${color}` }}>
      <img src={image} alt={name} />
      <p>{category}</p>
      <h1>{name}</h1>
    </div>
  );
}
