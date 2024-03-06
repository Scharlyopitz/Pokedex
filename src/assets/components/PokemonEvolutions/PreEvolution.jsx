import { Link } from "react-router-dom";

export default function PreEvolution({ PreEvolutions, shiny }) {
  return (
    <>
      {PreEvolutions?.map((PreEvolution, idx) => (
        <div key={idx} className="preEvolution">
          <div>
            <Link to={`/PokemonStats/${PreEvolution.name.fr}`}>
              <img
                src={
                  shiny
                    ? PreEvolution.sprites.shiny
                    : PreEvolution.sprites.regular
                }
                alt={`image ${PreEvolution.name.fr}`}
              />
            </Link>
          </div>
          <p>
            N° {PreEvolution.pokedex_id} {PreEvolution.name.fr}
          </p>
        </div>
      ))}
    </>
  );
}
