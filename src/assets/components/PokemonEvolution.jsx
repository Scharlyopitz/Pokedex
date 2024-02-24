export default function PokemonEvolution({
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
          Evolutions :
          <div>
            {PokemonPreEvolution?.map((pokePreEvo, idx) => (
              <div key={idx}>
                <p>
                  Normal : #{pokePreEvo.pokedexId} {pokePreEvo.name}
                </p>
              </div>
            ))}
            {PokemonNextEvolution?.map((pokeNextEvo, idx) => (
              <div key={idx}>
                <p>
                  Name : #{pokeNextEvo.pokedexId} {pokeNextEvo.name}
                </p>
              </div>
            ))}
            {PokemonMegaEvolution?.map((megaEvol, idx) => (
              <div key={idx}>
                <p>Mega : {megaEvol.orbe}</p>
                <img
                  src={
                    shiny ? megaEvol.sprites.shiny : megaEvol.sprites.regular
                  }
                  alt={megaEvol.orbe}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
