import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const getPokemones = async () => {
      //GET
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      const listPokemones = await response.json()
      const { results } = listPokemones

      const newPokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json()

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default
        }
      })

      setPokemones(await Promise.all(newPokemones))
    }

    getPokemones()
  }, [])

  return(
    <div className="App">
      <h1>Pokedex</h1>

      {
        pokemones.map(pokemon => {
          return (
            <div>
              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              <span>{pokemon.id}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
