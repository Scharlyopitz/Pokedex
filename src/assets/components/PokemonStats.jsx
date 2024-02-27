import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokemonInformations from "./PokemonInformations";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MegaEvolution from "./PokemonEvolutions/MegaEvolution";

export default function PokemonStats({ pokemons }) {
  const { name } = useParams();
  const poke = pokemons.find((pokemon) => pokemon.name.fr === name);

  const [shiny, setShiny] = useState(false);

  // const [pokemonNextEvoName, setPokemonNextEvoName] = useState("");
  const [pokemonPreEvoName, setPokemonPreEvoName] = useState("");

  // const imgPreEvo = pokemons.find(
  //   (pokemon) => pokemon.name.fr === pokemonPreEvoName
  // );
  // console.log(imgPreEvo);

  // const imgNextEvo = pokemons.find(
  //   (pokemon) => pokemon.name.fr === pokemonNextEvoName
  // );

  const PokemonPreEvolution = poke?.evolution?.pre;
  const PokemonNextEvolution = poke?.evolution?.next;
  const PokemonMegaEvolution = poke?.evolution?.mega;

  useEffect(() => {
    PokemonPreEvolution?.map((pok) => setPokemonPreEvoName(pok.name));
  }, [poke]);

  return (
    <>
      {poke && (
        <div>
          <BackHomeBtn />
          <PokemonInformations
            poke={poke}
            shiny={shiny}
            setShiny={setShiny}
            PokemonPreEvolution={PokemonPreEvolution}
            PokemonNextEvolution={PokemonNextEvolution}
          />
          <MegaEvolution
            PokemonMegaEvolution={PokemonMegaEvolution}
            shiny={shiny}
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
