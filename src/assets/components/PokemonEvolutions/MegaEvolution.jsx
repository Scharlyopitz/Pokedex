export default function MegaEvolution({ PokemonMegaEvolution, shiny }) {
  return (
    <>
      {PokemonMegaEvolution?.map((megaEvol, idx) => (
        <div key={idx}>
          <p>Mega : {megaEvol.orbe}</p>
          <img
            src={shiny ? megaEvol.sprites.shiny : megaEvol.sprites.regular}
            alt={megaEvol.orbe}
          />
        </div>
      ))}
    </>
  );
}
