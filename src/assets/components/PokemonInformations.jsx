import Evolutions from "./Evolutions";

export default function PokemonInformations({
  poke,
  shiny,
  setShiny,
  PreEvolutions,
  NextEvolutions,
}) {
  const PokemonId = poke?.pokedex_id;
  const PokemonName = poke?.name.fr;
  const PokemonImgRegular = poke?.sprites.regular;
  const PokemonWeight = poke?.weight;
  const PokemonHeight = poke?.height;
  const PokemonCategory = poke?.category;
  const PokemonImgShiny = poke?.sprites.shiny;

  return (
    <>
      <div className="information_container">
        <div className="currentPokemon">
          <img
            src={shiny ? PokemonImgShiny : PokemonImgRegular}
            alt={`image ${PokemonName}`}
          />
        </div>
        <div className="informations">
          <h1>N° {PokemonId}</h1>
          <h1>{PokemonName}</h1>
          {PokemonImgShiny && (
            <p>
              version : <button onClick={() => setShiny(false)}>Normal</button>
              {" | "}
              <button onClick={() => setShiny(true)}>Shiny</button>
            </p>
          )}
          {/* <Evolutions
          PreEvolutions={PreEvolutions}
          NextEvolutions={NextEvolutions}
          shiny={shiny}
        /> */}
          Talent(s) :
          {poke.talents?.map((talent, idx) => (
            <p key={idx}>{talent.name}</p>
          ))}
          <p>{PokemonCategory} </p>
          <div className="information">
            <p className="vignette">Type</p>
            {poke.types?.map((type, idx) => (
              <div key={idx} className="type">
                <img src={type.image} alt={type.name} />
                <p>{type.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
          <div className="information">
            <p className="vignette">Taille</p> {PokemonHeight}{" "}
          </div>
          <div className="information">
            <p className="vignette">Poids</p> {PokemonWeight}
          </div>
        </div>
      </div>
    </>
  );
}
