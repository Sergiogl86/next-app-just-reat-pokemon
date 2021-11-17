import axios from "axios";
import Loading from "./../../src/components/Loading/Loading";

const PokemonSSR = ({ pokemonsList }) => {
  return (
    <>
      <h1>Pokémon SSR</h1>
      {pokemonsList ? (
        <ul>
          {pokemonsList.map((pokemon) => (
            <li key={pokemon.id}>
              <h2>{`Name: ${pokemon.name}`}</h2>
              <a href={`/pokemonSSR/${pokemon.id}`}>{`URL: ${pokemon.url}`}</a>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
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

export default PokemonSSR;
