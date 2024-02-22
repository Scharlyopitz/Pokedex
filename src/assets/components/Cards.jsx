import Card from "./Card";

export default function Cards({ pokemons }) {
  return (
    <div className="cards_container">
      {pokemons.map((pokemon, idx) => {
        return (
          <Card
            key={idx}
            id={pokemon.pokedexId}
            name={pokemon.name.fr}
            image={pokemon.sprites.regular}
            type={pokemon.types[0].name}
          />
        );
      })}
    </div>
  );
}
