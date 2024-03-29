import Card from "./Card";

export default function Cards({
  pokemons,
  searchPokemon,
  pokemonCategory,
  setGetPokemonHovered,
}) {
  return (
    <div className="cards_container">
      {pokemons
        .filter((value) => {
          const SearchMatch = value.name.fr
            .toLowerCase()
            .replace(/[éèêë]/gi, "e")
            .includes(searchPokemon);
          return pokemonCategory === "All"
            ? SearchMatch
            : SearchMatch && value.types[0].name === pokemonCategory;
        })
        .map((value, idx) => {
          return (
            <Card
              key={idx}
              id={value.pokedex_id}
              name={value.name.fr}
              image={value.sprites.regular}
              type={value.types[0].name}
              setGetPokemonHovered={setGetPokemonHovered}
            />
          );
        })}
    </div>
  );
}
