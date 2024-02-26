import Card from "./Card";

export default function Cards({
  pokemons,
  searchPokemon,
  pokemonCategory,
  setSearchPokemon,
}) {
  return (
    <div className="cards_container">
      {pokemons
        .filter((value) => {
          return pokemonCategory === "All"
            ? value.name.fr.toLowerCase().includes(searchPokemon)
            : value.name.fr.toLowerCase().includes(searchPokemon) &&
                value.types[0].name === pokemonCategory;
        })
        .map((value, idx) => {
          return (
            <Card
              key={idx}
              id={value.pokedexId}
              name={value.name.fr}
              image={value.sprites.regular}
              type={value.types[0].name}
              setSearchPokemon={setSearchPokemon}
            />
          );
        })}
    </div>
  );
}
