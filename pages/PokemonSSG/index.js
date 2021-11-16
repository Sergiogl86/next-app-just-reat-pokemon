import axios from "axios";

const pokemonSSG = ({ pokemonsList }) => {
  return (
    <>
      <h1>Pokémon SSG</h1>
      <ul>
        {pokemonsList.map((pokemon) => (
          <li key={pokemon.id}>
            <h2>{`Name: ${pokemon.name}`}</h2>
            <a href={`/PokemonSSG/${pokemon.id}`}>{`URL: ${pokemon.url}`}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const apiPokemons = "https://week-3-challenge-api.herokuapp.com/pokemon/";
  try {
    const { data: pokemonsList } = await axios.get(apiPokemons);
    return {
      props: {
        pokemonsList,
      },
    };
  } catch (error) {
    console.log(error);
    return;
  }
}

export default pokemonSSG;
