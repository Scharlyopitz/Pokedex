import Card from "./Card";

export default function Cards({ pokemons, searchPokemon, pokemonCategory }) {
  return (
    <div className="cards_container">
      {pokemons
        .filter((value) => {
          return value.name.fr.toLowerCase().includes(searchPokemon);
        })
        .map((value, idx) => {
          return (
            <Card
              key={idx}
              id={value.pokedexId}
              name={value.name.fr}
              image={value.sprites.regular}
              type={value.types[0].name}
            />
          );
        })}
    </div>
  );
}
