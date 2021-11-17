import { rest } from "msw";

const pokemonsList = [
  {
    name: "zubat",
    url: "https://pokeapi.co/api/v2/pokemon/41/",
    id: 1,
  },
  {
    name: "wigglytuff",
    url: "https://pokeapi.co/api/v2/pokemon/40/",
    id: 2,
  },
  {
    name: "jigglypuff",
    url: "https://pokeapi.co/api/v2/pokemon/39/",
    id: 3,
  },
  {
    name: "golbat",
    url: "https://pokeapi.co/api/v2/pokemon/42/",
    id: 4,
  },
];

const apiUrl = "https://week-3-challenge-api.herokuapp.com/pokemon/";

const handlers = [
  rest.get(apiUrl, (req, res, ctx) => {
    return res(ctx.json(pokemonsList));
  }),
  rest.post(apiUrl, (req, res, ctx) => {
    return res(ctx.json(pokemonsList));
  }),
  rest.post(apiUrl, (req, res, ctx) => {
    return res(ctx.json(pokemonsList));
  }),
];

export default handlers;
