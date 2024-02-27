import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function NextEvolution({ PokemonNextEvolution }) {
  return (
    <>
      {PokemonNextEvolution?.map((pokeNextEvo, idx) => (
        <div key={idx}>
          <p>
            <FontAwesomeIcon icon={faChevronRight} /> #{pokeNextEvo.pokedexId}{" "}
            {pokeNextEvo.name}{" "}
          </p>
        </div>
      ))}
    </>
  );
}
