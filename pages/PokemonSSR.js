import axios from "axios";

export const pokemonSSR = ({ pokemonsList }) => {
  return (
    <>
      <h1>Pokémon SSR</h1>
      <ul>
        {pokemonsList.map((pokemon) => (
          <li key={pokemon.id}>
            <h2>{`Name: ${pokemon.name}`}</h2>
            <h2>{`URL: ${pokemon.url}`}</h2>
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
