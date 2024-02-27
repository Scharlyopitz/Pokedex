import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function PreEvolution({ PokemonPreEvolution }) {
  return (
    <>
      {PokemonPreEvolution?.map((pokePreEvo, idx) => (
        <div key={idx}>
          <p>
            #{pokePreEvo.pokedexId} {pokePreEvo.name}{" "}
            <FontAwesomeIcon icon={faChevronLeft} />
          </p>
        </div>
      ))}
    </>
  );
}
