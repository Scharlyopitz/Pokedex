export default function PokemonInformations({ poke, shiny, setShiny }) {
  const PokemonId = poke?.pokedexId;
  const PokemonName = poke?.name.fr;
  const PokemonImgRegular = poke?.sprites.regular;
  const PokemonWeight = poke?.weight;
  const PokemonHeight = poke?.height;
  const PokemonCategory = poke?.category;
  const PokemonImgShiny = poke?.sprites.shiny;

  return (
    <>
      <div>
        <h1># {PokemonId}</h1>
        <h1>{PokemonName}</h1>
        {PokemonImgShiny && (
          <p>
            version : <button onClick={() => setShiny(false)}>Normal</button>
            {" | "}
            <button onClick={() => setShiny(true)}>Shiny</button>
          </p>
        )}
        <img
          src={shiny ? PokemonImgShiny : PokemonImgRegular}
          alt={`image ${PokemonName}`}
        />
        <p>Taille : {PokemonHeight} </p>
        <p>Catégorie : {PokemonCategory} </p>
        <p>Poids : {PokemonWeight}</p>
        Talent :
        {poke.talents?.map((talent, idx) => (
          <p key={idx}>{talent.name}</p>
        ))}
        Type :
        {poke.types?.map((type, idx) => (
          <div key={idx}>
            {type.name} <img src={type.image} alt={type.name} />
          </div>
        ))}
      </div>
    </>
  );
}
