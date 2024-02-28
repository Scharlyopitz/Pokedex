import PreEvolution from "./PokemonEvolutions/PreEvolution";
import NextEvolution from "./PokemonEvolutions/NextEvolution";

export default function Evolutions({
  PreEvolutions,
  NextEvolutions,
  shiny,
  PokemonImgShiny,
  PokemonImgRegular,
  PokemonName,
}) {
  return (
    <div>
      <PreEvolution PreEvolutions={PreEvolutions} shiny={shiny} />
      <img
        src={shiny ? PokemonImgShiny : PokemonImgRegular}
        alt={`image ${PokemonName}`}
      />
      <NextEvolution NextEvolutions={NextEvolutions} shiny={shiny} />
    </div>
  );
}
