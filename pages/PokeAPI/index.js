import axios from "axios";
import { useEffect, useState } from "react";

const pokeAPI = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const pokeAPIUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

  const getpokeAPI = async () => {
    try {
      const { data: pokemons } = await axios.get(pokeAPIUrl);
      setPokemonsList(pokemons.results);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getpokeAPI();
  }, []);

  return (
    <>
      <h1>PokeAPI</h1>
      <ul>
        {pokemonsList.map((pokemon, index) => (
          <li key={index}>
            <h2>{`Name: ${pokemon.name}`}</h2>
            <h2>{`URL: ${pokemon.url}`}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default pokeAPI;
