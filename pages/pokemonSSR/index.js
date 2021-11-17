import axios from "axios";
import Loading from "./../../src/components/Loading/Loading";
import Link from "next/link";

const PokemonSSR = ({ pokemonsList }) => {
  return (
    <>
      <h1>Pokémon SSR</h1>
      {pokemonsList ? (
        <ul>
          {pokemonsList.map((pokemon) => (
            <li key={pokemon.id}>
              <h2>{`Name: ${pokemon.name}`}</h2>
              <Link
                href={`/pokemonSSR/${pokemon.id}`}
                key={pokemon.name}
                passHref
              >
                {`URL: ${pokemon.url}`}
              </Link>
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
