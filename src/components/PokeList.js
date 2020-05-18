import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PokeList() {
    const [Pokemons, setPokemons] = useState([])


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/generation/1')
            .then((response) => {
                setPokemons(response.data.pokemon_species)
            })
            .catch((error) => {
                console.log("Ops! Algo deu errado: ", error);
            })
    }, [])



    return (
        <>
            <ul>
                {Pokemons.map(pokemon => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </>
    )
}

export default PokeList
