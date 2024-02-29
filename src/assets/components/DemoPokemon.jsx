import Interrogation from "/interrogation.png";

export default function DemoPokemon({ getPokemonHovered }) {
  return (
    <div className="demoPokemon">
      <img src={getPokemonHovered ? getPokemonHovered : Interrogation} alt="" />
    </div>
  );
}
