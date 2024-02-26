export default function PreEvolution({ PokemonPreEvolution }) {
  return (
    <>
      {PokemonPreEvolution?.map((pokePreEvo, idx) => (
        <div key={idx}>
          <p>
            Précédent : #{pokePreEvo.pokedexId} {pokePreEvo.name}
          </p>
        </div>
      ))}
    </>
  );
}
