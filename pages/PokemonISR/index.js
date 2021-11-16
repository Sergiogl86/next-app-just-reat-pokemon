import axios from "axios";

const pokemonISR = ({ pokemonsList }) => {
  return (
    <>
      <h1>Pokémon ISR</h1>
      <ul>
        {pokemonsList.map((pokemon) => (
          <li key={pokemon.id}>
            <h2>{`Name: ${pokemon.name}`}</h2>
            <a href={`/pokemonISR/${pokemon.id}`}>{`URL: ${pokemon.url}`}</a>
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
      revalidate: 20,
    };
  } catch (error) {
    console.log(error);
    return;
  }
}

export default pokemonISR;
