import { useState } from "react";
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
  const PokemonMegaEvo = poke?.evolution?.mega;

  const [activeNormal, setActiveNormal] = useState(true);
  const [activeShiny, setActiveShiny] = useState(false);

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
          <div className="firstSection">
            <div className="information Orange">
              <div>
                <h1>
                  N° {PokemonId} {PokemonName}
                </h1>
              </div>

              {PokemonImgShiny && (
                <div className="buttons">
                  <button
                    className={`Normal ${activeNormal && "Active"}`}
                    onClick={() => {
                      setShiny(false),
                        setActiveShiny(false),
                        setActiveNormal(true);
                    }}
                  >
                    NORMAL
                  </button>
                  <button
                    className={`Shiny ${activeShiny && "Active"}`}
                    onClick={() => {
                      setShiny(true),
                        setActiveNormal(false),
                        setActiveShiny(true);
                    }}
                  >
                    SHINY
                  </button>
                </div>
              )}
            </div>

            <p className="Beige">{PokemonCategory} </p>
            <div className="blueLight">
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
              <div className="information">
                <p className="vignette">Talent(s)</p>
                <div className="talents">
                  {poke.talents?.map((talent, idx) => (
                    <div key={idx}>
                      <p>\{talent.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="evolutionSection">
            <div className="Pink">Evolution</div>
            {poke.evolution ? (
              <Evolutions
                PreEvolutions={PreEvolutions}
                NextEvolutions={NextEvolutions}
                PokemonMegaEvo={PokemonMegaEvo}
                shiny={shiny}
              />
            ) : (
              <div className="evolution Beige">
                <p>Pas d'évolution pour ce Pokémon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
