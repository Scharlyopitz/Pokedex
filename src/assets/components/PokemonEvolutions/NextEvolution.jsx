import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function NextEvolution({
  PokemonNextEvolution,
  NextEvolutions,
  shiny,
}) {
  return (
    <>
      {NextEvolutions?.map((NextEvolution, idx) => (
        <div key={idx}>
          <img
            src={
              shiny
                ? NextEvolution.sprites.shiny
                : NextEvolution.sprites.regular
            }
            alt={`image ${NextEvolution.name.fr}`}
          />
          #{NextEvolution.pokedexId} {NextEvolution.name.fr}{" "}
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      ))}
      {/* {PokemonNextEvolution?.map((pokeNextEvo, idx) => (
        <div key={idx}>
          <p>
            <FontAwesomeIcon icon={faChevronRight} /> #{pokeNextEvo.pokedexId}{" "}
            {pokeNextEvo.name}{" "}
          </p>
        </div>
      ))} */}
    </>
  );
}
