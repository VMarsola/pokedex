import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PokeList() {
    const [pokemons, setPokemons] = useState([])
    const [images, setImages] = useState([])


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/generation/1')
            .then((response) => {
                setPokemons(response.data.pokemon_species)
                console.log(response.data.pokemon_species)
            })
            .catch((error) => {
                console.log("Ops! Algo deu errado: ", error);
            })
    }, [])

    function getImage(pokemon) {
        let pokeArr = pokemon.url.split("/")
        let pokeId = pokeArr[pokeArr.length-2]
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
    }


    return (
        <div className="pokelist-container">
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.url}>
                        <img src={getImage(pokemon)} alt={pokemon.name}/>
                        {pokemon.name}
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

