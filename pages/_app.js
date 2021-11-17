import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home!</Link>
          </li>
          <li>
            <Link href="/pokeAPI">Pokémons: PokeAPI</Link>
          </li>
          <li>
            <Link href="/pokemonSSR">Mis pokémon SSR</Link>
          </li>
          <li>
            <Link href="/pokemonSSG">Mis pokémon SSG</Link>
          </li>
          <li>
            <Link href="/pokemonISR">Mis pokémon ISR </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
