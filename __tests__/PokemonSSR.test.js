import { render, screen } from "@testing-library/react";
import PokemonSSR from "../pages/PokemonSSR";
import server from "../__mocks__/server";

import { getServerSideProps } from "../pages/PokemonSSR";

beforeAll(() => {
  server.listen();
});
beforeEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("Given a PokemonSSR component", () => {
  describe("When it receives a list of pokemons", () => {
    test("Then it should render a list of pokemons", () => {
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

      render(<PokemonSSR pokemonsList={pokemonsList} />);

      const zubat = screen.getByRole("heading", { name: "Name: zubat" });
      const wigglytuff = screen.getByRole("heading", {
        name: "Name: wigglytuff",
      });

      screen.debug();

      expect(zubat).toBeInTheDocument();
      expect(wigglytuff).toBeInTheDocument();
    });
  });
});

describe("Given a getServerSideProps function", () => {
  describe("When it is call", () => {
    test("Then it should return a list of pokemons", async () => {
      const expectedPokemonsList = [
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

      const expectedProps = {
        props: {
          pokemonsList: expectedPokemonsList,
        },
      };

      const result = await getServerSideProps();

      expect(result).toEqual(expectedProps);
    });
  });
});
