import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokemonInformations from "./PokemonInformations";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PokemonStats({ pokemons }) {
  const { name } = useParams();
  const poke = pokemons.find((pokemon) => pokemon.name.fr === name);

  const [shiny, setShiny] = useState(false);

  const [pokemonNextEvoName, setPokemonNextEvoName] = useState([]);
  const [pokemonPreEvoName, setPokemonPreEvoName] = useState([]);

  useEffect(() => {
    document.title = `Pokédex | ${name}`;
    setPokemonPreEvoName(poke?.evolution?.pre?.map((preEvo) => preEvo.name));
    setPokemonNextEvoName(
      poke?.evolution?.next?.map((nextEvo) => nextEvo.name)
    );
  }, [poke]);

  const PreEvolutions =
    pokemonPreEvoName &&
    pokemons.filter(
      (pokemon) =>
        pokemon.name.fr === pokemonPreEvoName[0] ||
        pokemon.name.fr === pokemonPreEvoName[1]
    );

  const NextEvolutions =
    pokemonNextEvoName &&
    pokemons.filter(
      (pokemon) =>
        pokemon.name.fr === pokemonNextEvoName[0] ||
        pokemon.name.fr === pokemonNextEvoName[1]
    );

  return (
    <>
      {poke && (
        <div className="PokePage">
          <BackHomeBtn />
          <PokemonInformations
            poke={poke}
            shiny={shiny}
            setShiny={setShiny}
            PreEvolutions={PreEvolutions}
            NextEvolutions={NextEvolutions}
          />
        </div>
      )}
    </>
  );
}

function BackHomeBtn() {
  return (
    <>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} />
      </Link>
    </>
  );
}
