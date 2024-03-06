export default function MegaEvolution({ PokemonMegaEvo, shiny }) {
  return (
    <>
      {PokemonMegaEvo?.map((megaEvol, idx) => (
        <div key={idx}>
          <img
            src={shiny ? megaEvol.sprites.shiny : megaEvol.sprites.regular}
            alt={megaEvol.orbe}
          />
          <p>{megaEvol.orbe}</p>
        </div>
      ))}
    </>
  );
}
