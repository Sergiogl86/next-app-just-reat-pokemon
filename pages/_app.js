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
            <a href="/PokeAPI">Pokémons: PokeAPI</a>
          </li>
          <li>
            <a href="/PokemonSSR">Mis pokémon SSR</a>
          </li>
          <li>
            <a href="/PokemonSSG">Mis pokémon SSG</a>
          </li>
          <li>
            <a href="/PokemonISR">Mis pokémon ISR</a>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
