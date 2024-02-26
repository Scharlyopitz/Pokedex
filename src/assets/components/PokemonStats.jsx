import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokemonEvolution from "./PokemonEvolution";
import PokemonInformations from "./PokemonInformations";

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
          <PokemonInformations poke={poke} shiny={shiny} setShiny={setShiny} />
          <PokemonEvolution
            poke={poke}
            PokemonMegaEvolution={PokemonMegaEvolution}
            PokemonNextEvolution={PokemonNextEvolution}
            PokemonPreEvolution={PokemonPreEvolution}
            shiny={shiny}
          />
        </div>
      )}
    </>
  );
}
