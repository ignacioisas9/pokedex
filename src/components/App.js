import '../styles/App.css';
import { useEffect, useState } from 'react';
import Card from './Card';

function App() {
  const [pokemons, setPokemons] = useState([]);

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

  return (
    <div className="App">
      <div className="m-10 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;

