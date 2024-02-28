import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function PreEvolution({ PreEvolutions, shiny }) {
  return (
    <>
      {PreEvolutions?.map((PreEvolution, idx) => (
        <div key={idx}>
          <div>
            <img
              src={
                shiny
                  ? PreEvolution.sprites.shiny
                  : PreEvolution.sprites.regular
              }
              alt={`image ${PreEvolution.name.fr}`}
            />
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          #{PreEvolution.pokedexId} {PreEvolution.name.fr}{" "}
        </div>
      ))}
    </>
  );
}
