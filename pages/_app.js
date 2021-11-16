import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home!</a>
          </li>
          <li>
            <a href="/pokeAPI">Pokémons: PokeAPI</a>
          </li>
          <li>
            <a href="/pokemonSSR">Mis pokémon SSR</a>
          </li>
          <li>
            <a href="/pokemonSSG">Mis pokémon SSG</a>
          </li>
          <li>
            <a href="/pokemonISR">Mis pokémon ISR </a>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
