import axios from "axios";
import { useState } from "react";

const PokeAPI = () => {
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

  getpokeAPI();

  return (
    <>
      <h1>PokeAPI</h1>
      <ul>
        {pokemonsList.map((pokemon) => (
          <li>
            <h2>{`Name: ${pokemon.name}`}</h2>
            <h2>{`URL: ${pokemon.url}`}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokeAPI;
