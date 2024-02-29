export default function DemoPokemon({ getPokemonHovered }) {
  return (
    <div className="demoPokemon">
      <img src={getPokemonHovered} alt="pokemon" />
    </div>
  );
}
