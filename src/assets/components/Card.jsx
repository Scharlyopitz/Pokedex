export default function Card({ name, category, image }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{category}</p>
      <img src={image} alt={name} />
    </div>
  );
}
