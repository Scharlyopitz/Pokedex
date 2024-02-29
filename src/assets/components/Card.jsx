import { Link } from "react-router-dom";
import PokeBall from "/pokeball.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Card({ id, name, image, setGetPokemonHovered }) {
  return (
    <>
      <Link
        onMouseEnter={(e) => setGetPokemonHovered(image)}
        data-id={id}
        to={`/PokemonStats/${name}`}
        className="card"
      >
        <img className="pokeball" src={PokeBall} alt="Pokeball" />
        <img src={image} alt={name} />
        <p>N° {id}</p> <p>{name}</p>
        <div className="hoveredPokemon">
          <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />
        </div>
      </Link>
    </>
  );
}
