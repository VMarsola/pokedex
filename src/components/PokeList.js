import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Generation } from './index'

export default function PokeList() {
    const [pokemons, setPokemons] = useState([])
    const a = 1
    const [search, setSearch] = useState('')


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/generation/${a}`)
            .then((response) => {
                setPokemons(response.data.pokemon_species)
            })
            .catch((error) => {
                console.log("Ops! Algo deu errado: ", error);
            })
    }, [])


    function getImage(pokemon) {
        let pokeArr = pokemon.url.split("/")
        let pokeId = pokeArr[pokeArr.length - 2]
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
    }

   const filteredPokemons = pokemons.filter(pokemon =>{
      return pokemon.name.toLowerCase().includes( search.toLowerCase() )
   } )

    return (
        <div className="pokelist-container">
            <div>
                <Generation />
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Procure seu pokémon: "
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="border-corner"/>
            <ul>
                {filteredPokemons.map(pokemon => (
                    <li key={pokemon.url}>
                        <img src={getImage(pokemon)} alt={pokemon.name} />
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

