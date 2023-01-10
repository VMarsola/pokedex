import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaWindowClose } from "react-icons/fa";

type pokemonProps = {
  name: string;
  url: string;
  thumb: string;
  id: number;

  type?: string;
  height?: number;
  weight?: number;
  exp?: number;
  captRate?: number;
};

function PokeList() {
  const [pokemons, setPokemons] = useState([] as Array<pokemonProps>);
  const [poke, setPoke] = useState({} as any);
  const [search, setSearch] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/generation/1`)
      .then((response) => {
        let newList = response.data.pokemon_species.map(
          (poke: pokemonProps) => {
            let pokeArr = poke.url.split("/");
            let id = pokeArr[pokeArr.length - 2];

            return {
              name: poke.name,
              url: poke.url,
              thumb: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
              id: id,
            };
          }
        );

        setPokemons(newList);
      })
      .catch((error) => {
        console.log("Ops! Algo deu errado: ", error);
      });
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  const showPokemon = (pokemon: pokemonProps) => {
    axios
      .all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`),
      ])
      .then(
        axios.spread((...responses) => {
          pokemon.type = responses[0].data.types[0].type.name;
          pokemon.height = responses[0].data.height;
          pokemon.weight = responses[0].data.weight;
          pokemon.exp = responses[0].data.base_experience;
          pokemon.captRate = responses[1].data.capture_rate;

          setPoke(pokemon);

          setModal(!modal);
        })
      )
      .catch((error) => {
        console.log("Ops! Algo deu errado: ", error);
      });
  };

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <div className="pokelist-container">
      <div className={modal ? "container-modal" : "container-modal off"}>
        <div className="wrapper">
          <FaWindowClose onClick={closeModal} className="close-icon" />
          <div className="basic-info">
            <img src={poke.thumb} alt={poke.name} />
            <div>
              <p>Name: {poke.name}</p>
              <p>Type: {poke.type}</p>
            </div>
          </div>
          <div className="specs">
            <p>Capture rate: {poke.captRate}</p>
            <p>Height: {poke.height}</p>
            <p>Base XP: {poke.exp}</p>
            <p>Weight: {poke.weight}</p>
          </div>
        </div>
      </div>
      <div className="filter-pokemons">
        <input
          className="search-input"
          type="text"
          placeholder="Procure seu pokémon: "
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {filteredPokemons.map((pokemon: pokemonProps) => {
          return (
            <li key={pokemon.url} onClick={() => showPokemon(pokemon)}>
              <img src={pokemon.thumb} alt={pokemon.name} />
              {pokemon.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PokeList;
