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
          console.log(value.name.fr.replace(/[éè]/gi, "e"));
          return pokemonCategory === "All"
            ? value.name.fr
                .toLowerCase()
                .replace(/[éè]/gi, "e")
                .includes(searchPokemon)
            : value.name.fr
                .toLowerCase()
                .replace(/[éè]/gi, "e")
                .includes(searchPokemon) &&
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
