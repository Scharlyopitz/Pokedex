import { Link } from "react-router-dom";

export default function NextEvolution({ NextEvolutions, shiny }) {
  return (
    <>
      {NextEvolutions?.map((NextEvolution, idx) => (
        <div key={idx} className="nextEvolution">
          <div>
            <Link to={`/PokemonStats/${NextEvolution.name.fr}`}>
              <img
                src={
                  shiny
                    ? NextEvolution.sprites.shiny
                    : NextEvolution.sprites.regular
                }
                alt={`image ${NextEvolution.name.fr}`}
              />
            </Link>
          </div>
          <p>
            N° {NextEvolution.pokedex_id} {NextEvolution.name.fr}
          </p>
        </div>
      ))}
    </>
  );
}
