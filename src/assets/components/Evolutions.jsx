import PreEvolution from "./PokemonEvolutions/PreEvolution";
import NextEvolution from "./PokemonEvolutions/NextEvolution";

export default function Evolutions({ PreEvolutions, NextEvolutions, shiny }) {
  return (
    <div className="evolutions">
      <PreEvolution PreEvolutions={PreEvolutions} shiny={shiny} />
      <NextEvolution NextEvolutions={NextEvolutions} shiny={shiny} />
    </div>
  );
}
