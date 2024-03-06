import PreEvolution from "./PokemonEvolutions/PreEvolution";
import NextEvolution from "./PokemonEvolutions/NextEvolution";
import MegaEvolution from "./PokemonEvolutions/MegaEvolution";

export default function Evolutions({
  PreEvolutions,
  NextEvolutions,
  PokemonMegaEvo,
  shiny,
}) {
  return (
    <div className="evolutions Beige">
      <PreEvolution PreEvolutions={PreEvolutions} shiny={shiny} />
      <NextEvolution NextEvolutions={NextEvolutions} shiny={shiny} />
      <MegaEvolution PokemonMegaEvo={PokemonMegaEvo} shiny={shiny} />
    </div>
  );
}
