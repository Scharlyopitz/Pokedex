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
    <div className="evolutions">
      <PreEvolution PreEvolutions={PreEvolutions} shiny={shiny} />
      <img
        className="currentPokemon"
        src={shiny ? PokemonImgShiny : PokemonImgRegular}
        alt={`image ${PokemonName}`}
      />
      <NextEvolution NextEvolutions={NextEvolutions} shiny={shiny} />
    </div>
  );
}
