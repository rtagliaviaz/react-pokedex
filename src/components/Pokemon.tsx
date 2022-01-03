import React from 'react'
import {useHistory} from 'react-router-dom'
import {PokemonI} from './Interfaces'

interface Props {
  pokemon: PokemonI;
}


const Pokemon = ({pokemon}: Props) => {

  const history = useHistory()

  return (
    <div style={{display: 'flex', border: '1px solid black', width: '200px', height: '200px', marginTop: '20px',marginLeft: '10px', marginRight: '10px', marginBottom: '20px', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 241, 113, 0.8)', borderRadius: '5px'}}>
    <p style={{textAlign: 'center'}}>{pokemon.name} #{pokemon.id}</p>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" style={{width: '120px'}} />
    <button onClick={() => history.push(`/details/${pokemon.id}`)}>details</button>
  </div>
    
  )
}

export default Pokemon
