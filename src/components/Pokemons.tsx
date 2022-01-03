import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import PokemonTypes from "./PokemonTypes";
import axios from "axios";
import {PokemonI, RegionI} from './Interfaces'
import styled from 'styled-components'

//typescript interface
const regions:RegionI[] = [
  {name: 'National', id: '1'},
  {name: 'Kanto', id: '2'},
  {name: 'Johto', id: '3'},
  {name: 'Hoenn', id: '4'},
  {name: 'Sinnoh', id: '5'},
  {name: 'Extended Sinnoh', id: '6'},
  {name: 'Updated Johto', id: '7'},
  {name: 'Unova', id: '8'},
  {name: 'Updated Unova', id: '9'},
  {name: 'Kalos Central', id: '12'},
  {name: 'Kalos Coastal', id: '13'},
  {name: 'Kalos Mountain', id: '14'},
  {name: 'Updated Hoenn', id: '15'},
  {name: 'Alola', id: '16'},
  {name: 'Melemele ', id: '17'},
  {name: 'Akala', id: '18'},
  {name: 'Ulaula', id: '19'},
  {name: 'Poni', id: '20'},
  {name: 'Updated Alola', id: '21'},
]

//api
const api = "https://pokeapi.co/api/v2";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonI[]>([]);
  const [search, setSearch] = useState("");

  const getPokemonNameByRegion = async (region: string) => {
    let regionhelper
    region === undefined ? regionhelper = 1 : regionhelper = region
    const res = await axios.get(`${api}/pokedex/${regionhelper}`);
    
    let helper: PokemonI[] = [];
    res.data.pokemon_entries.forEach((poke: any) => {
      helper.push({
        name: poke.pokemon_species.name,
        id: poke.pokemon_species.url.slice(42, -1),
      });
    });
    setPokemons(helper);
  };

  useEffect(() => {
    getPokemonNameByRegion('1');
  }, []);

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div >
        <h1>Regions</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', margin: '0 auto', flexWrap: 'wrap'}}>
        {regions.map(region => (
          
          <button key={region.id} style={{margin: '10px', borderRadius: '5px', background: 'rgba(255, 241, 113, 0.8)'}}onClick={() => getPokemonNameByRegion(region.id)}>{region.name}</button>
          
        ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "25px",
        }}
      >
        <form action=''>
          <input
            type='text'
            placeholder='Search a pokemon'
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div style={{ display: "flex" }}>
        {/* <PokemonTypes /> */}
        <div
          style={{
            width: "1400px",
            display: "flex",
            flexWrap: "wrap",
            margin: "0 auto",
            justifyContent: "space-around",
            
          }}
        >
          {filteredPokemons.map((pokemon) => {
            return <Pokemon pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

//styles
const Regions = styled.div`

`

export default Pokemons;
