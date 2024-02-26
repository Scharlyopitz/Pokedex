import MegaEvolution from "./MegaEvolution";
import NextEvolution from "./NextEvolution";
import PreEvolution from "./PreEvolution";

export default function PokemonEvolutions({
  poke,
  PokemonPreEvolution,
  PokemonNextEvolution,
  PokemonMegaEvolution,
  shiny,
}) {
  return (
    <>
      {poke.evolution && (
        <div>
          <h2>Evolutions :</h2>
          <PreEvolution PokemonPreEvolution={PokemonPreEvolution} />
          <NextEvolution PokemonNextEvolution={PokemonNextEvolution} />
          <MegaEvolution
            PokemonMegaEvolution={PokemonMegaEvolution}
            shiny={shiny}
          />
        </div>
      )}
    </>
  );
}
