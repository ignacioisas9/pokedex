import '../App.css';
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
      <div className="grid-container">
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;

