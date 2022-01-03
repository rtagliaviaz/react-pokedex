import React from 'react'
//icons
import NormalIcon from '../resources/types-icons/Normal.png'
import FightingIcon from '../resources/types-icons/Fighting.png'
import FlyingIcon from '../resources/types-icons/Flying.png'
import PoisonIcon from '../resources/types-icons/Poison.png'
import GroundIcon from '../resources/types-icons/Ground.png'
import RockIcon from '../resources/types-icons/Rock.png'
import BugIcon from '../resources/types-icons/Bug.png'
import GhostIcon from '../resources/types-icons/Ghost.png'
import SteelIcon from '../resources/types-icons/Steel.png'
import FireIcon from '../resources/types-icons/Fire.png'
import WaterIcon from '../resources/types-icons/Water.png'
import GrassIcon from '../resources/types-icons/Grass.png'
import ElectricIcon from '../resources/types-icons/Electric.png'
import PsychicIcon from '../resources/types-icons/Psychic.png'
import IceIcon from '../resources/types-icons/Ice.png'
import DragonIcon from '../resources/types-icons/Dragon.png'
import DarkIcon from '../resources/types-icons/Dark.png'
import FairyIcon from '../resources/types-icons/Fairy.png'

const icons = [
  {type: 'Normal', icon: NormalIcon, id: 1, color: 'rgba(124, 139, 149, 0.36)'},
  {type: 'Fighting', icon: FightingIcon, id: 2, color: 'rgba(255, 0, 83, 0.36)'},
  {type: 'Flying', icon: FlyingIcon, id: 3, color: 'rgba(0, 129, 255, 0.36)'},
  {type: 'Poison', icon: PoisonIcon, id: 4, color: 'rgba(142, 0, 147, 0.36)'},
  {type: 'Ground', icon: GroundIcon, id: 5, color: 'rgba(255, 132, 0, 0.36)'},
  {type: 'Rock', icon: RockIcon, id: 6, color: 'rgba(142, 122, 40, 0.36)'},
  {type: 'Bug', icon: BugIcon, id: 7, color: 'rgba(132, 175, 87, 0.36)'},
  {type: 'Ghost', icon: GhostIcon, id: 8, color: 'rgba(21, 34, 170, 0.36)'},
  {type: 'Steel', icon: SteelIcon, id: 9, color: 'rgba(45, 95, 125, 0.36)'},
  {type: 'Fire', icon: FireIcon, id: 10, color: 'rgba(238, 129, 3, 0.46)'},
  {type: 'Water', icon: WaterIcon, id: 11, color: 'rgba(6, 145, 251, 0.36)'},
  {type: 'Grass', icon: GrassIcon, id: 12, color: 'rgba(0, 156, 0, 0.36)'},
  {type: 'Electric', icon: ElectricIcon, id: 13, color: 'rgba(251, 230, 6, 0.36)'},
  {type: 'Psychic', icon: PsychicIcon, id: 14, color: 'rgba(231, 125, 150, 0.36)'},
  {type: 'Ice', icon: IceIcon, id: 15, color: 'rgba(125, 210, 232, 0.36)'},
  {type: 'Dragon', icon: DragonIcon, id: 16, color: 'rgba(0, 86, 255, 0.36)'},
  {type: 'Dark', icon: DarkIcon, id: 17, color: 'rgba(0, 0, 0, 0.36)'},
  {type: 'Fairy', icon: FairyIcon, id: 18, color: 'rgba(255, 0, 230, 0.36)'},
]

const PokemonTypes = () => {
  return (
    <div style={{margin: '0 auto'}}>
      {icons.map(icon => (
        <div key={icon.id}>
          <img src={icon.icon} alt={icon.type} style={{width: '40px', cursor: 'pointer'}}/>
        </div>
      ))}
    </div>
  )
}

export default PokemonTypes
