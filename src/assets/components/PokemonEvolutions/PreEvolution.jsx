import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function PreEvolution({
  PokemonPreEvolution,
  PreEvolutions,
  shiny,
}) {
  return (
    <>
      {PreEvolutions?.map((PreEvolution, idx) => (
        <div key={idx}>
          <img
            src={
              shiny ? PreEvolution.sprites.shiny : PreEvolution.sprites.regular
            }
            alt={`image ${PreEvolution.name.fr}`}
          />
          #{PreEvolution.pokedexId} {PreEvolution.name.fr}{" "}
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      ))}

      {/* {PokemonPreEvolution?.map((pokePreEvo, idx) => (
        <div key={idx}>
          <p>
            #{pokePreEvo.pokedexId} {pokePreEvo.name}{" "}
            <FontAwesomeIcon icon={faChevronLeft} />
          </p>
        </div>
      ))} */}
    </>
  );
}
