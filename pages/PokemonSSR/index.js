import axios from "axios";

const pokemonSSR = ({ pokemonsList }) => {
  return (
    <>
      <h1>Pokémon SSR</h1>
      <ul>
        {pokemonsList.map((pokemon) => (
          <li key={pokemon.id}>
            <h2>{`Name: ${pokemon.name}`}</h2>
            <a href={`/PokemonSSR/${pokemon.id}`}>{`URL: ${pokemon.url}`}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
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

export default pokemonSSR;
