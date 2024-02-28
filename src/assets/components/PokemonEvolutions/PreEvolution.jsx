import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PreEvolution({ PreEvolutions, shiny }) {
  return (
    <>
      {PreEvolutions?.map((PreEvolution, idx) => (
        <div key={idx}>
          <div>
            <Link to={`/PokemonStats/${PreEvolution.name.fr}`}>
              <img
                src={
                  shiny
                    ? PreEvolution.sprites.shiny
                    : PreEvolution.sprites.regular
                }
                alt={`image ${PreEvolution.name.fr}`}
              />
            </Link>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          #{PreEvolution.pokedexId} {PreEvolution.name.fr}{" "}
        </div>
      ))}
    </>
  );
}
