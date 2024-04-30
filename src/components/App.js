import '../styles/App.css';
import { useEffect, useState } from 'react';
import Card from './Card';
import { FaArrowAltCircleUp } from "react-icons/fa";

function App() {
  const [pokemons, setPokemons] = useState([]);

  function subirPagina() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
      const data = await response.json();
      const { results } = data;

      const newPokemons = await Promise.all(results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const pokeData = await res.json();

        return {
          id: pokeData.id,
          name: pokeData.name,
          img: pokeData.sprites.other.dream_world.front_default
        };
      }));

      setPokemons(newPokemons);
    };

    getPokemons();
  }, []);

  const [boton, setBoton] = useState(false);
  const cambiarBoton = () => {
    if (window.scrollY > 400) {
      setBoton(true);
    } else {
      setBoton(false);
    }
  };
  window.addEventListener("scroll", cambiarBoton);
  let button;
  if (boton) {
    button = (
      <FaArrowAltCircleUp
        onClick={subirPagina}
        className="w-10 h-10 text-white rounded-2xl bg-primary-color fixed bottom-10 right-10 hover:bg-cyan-700 shadow-lg hover:-translate-y-2 transition-transform"
      />
    );
  } else {
    button = <div></div>;
  }

  return (
    <div className="App">
      <div className="m-10 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {button}
    </div>
  );
}

export default App;

