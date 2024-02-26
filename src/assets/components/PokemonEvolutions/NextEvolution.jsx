export default function NextEvolution({ PokemonNextEvolution }) {
  return (
    <>
      {PokemonNextEvolution?.map((pokeNextEvo, idx) => (
        <div key={idx}>
          <p>
            Suivant : #{pokeNextEvo.pokedexId} {pokeNextEvo.name}
          </p>
        </div>
      ))}
    </>
  );
}
