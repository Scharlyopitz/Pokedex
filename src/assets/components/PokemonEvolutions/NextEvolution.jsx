import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function NextEvolution({ NextEvolutions, shiny }) {
  return (
    <>
      {NextEvolutions?.map((NextEvolution, idx) => (
        <div key={idx}>
          <div>
            <FontAwesomeIcon icon={faChevronRight} />
            <img
              src={
                shiny
                  ? NextEvolution.sprites.shiny
                  : NextEvolution.sprites.regular
              }
              alt={`image ${NextEvolution.name.fr}`}
            />
          </div>
          #{NextEvolution.pokedexId} {NextEvolution.name.fr}{" "}
        </div>
      ))}
    </>
  );
}
