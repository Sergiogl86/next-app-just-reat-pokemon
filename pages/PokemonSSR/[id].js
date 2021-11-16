import axios from "axios";

const pokemonSSRDetalle = ({ pokemonDetalle }) => {
  return (
    <>
      <h1>Detalles:</h1>

      <h2>{`Name: ${pokemonDetalle.name}`}</h2>
      <img
        src={pokemonDetalle.sprites.other.dream_world.front_default}
        alt={`imagen-${pokemonDetalle.name}`}
      />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const apiPokemons = `https://week-3-challenge-api.herokuapp.com/pokemon/${params.id}`;
  try {
    const { data: pokemon } = await axios.get(apiPokemons);
    const { data: pokemonDetalle } = await axios.get(pokemon.url);
    return {
      props: {
        pokemonDetalle,
      },
    };
  } catch (error) {
    console.log(error);
    return;
  }
}

export default pokemonSSRDetalle;
