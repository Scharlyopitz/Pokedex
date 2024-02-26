export default function NextEvolution({ PokemonNextEvolution }) {
  return (
    <>
      {PokemonNextEvolution?.map((pokeNextEvo, idx) => (
        <div key={idx}>
          <p>
            Next : #{pokeNextEvo.pokedexId} {pokeNextEvo.name}
          </p>
        </div>
      ))}
    </>
  );
}
