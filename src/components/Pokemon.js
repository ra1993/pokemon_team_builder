import React from 'react';

const Pokemon = (props) => {

  return (
    <div>
      <img src={props.data.sprites.front_default} />
      <h3 style={{textTransform:"capitalize"}}>{props.data.name}</h3>
      <p>Number: {props.data.id}</p>
      <p style={{textTransform:"capitalize"}}>Type: {props.data.types[0].type.name}</p>
       
      <p style={{textTransform:"capitalize"}}>Type: {props.data.types[0].type.name}</p>
      <br></br>

      <table align="center">
      <tr>

      <p className = "stat1" style={{textTransform:"capitalize"}}>Attack: {props.data.stats[4].base_stat}</p>
      <p className = "stat1" style={{textTransform:"capitalize"}}>Defense: {props.data.stats[3].base_stat}</p>
      <p className = "stat1" style={{textTransform:"capitalize"}}>Sp Atk: {props.data.stats[2].base_stat}</p>
      </tr>
      <tr>
      <p className = "stat2" style={{textTransform:"capitalize"}}>Sp Def: {props.data.stats[1].base_stat}</p>
      <p className = "stat2"  style={{textTransform:"capitalize"}}>Speed: {props.data.stats[0].base_stat}</p>
      <p className = "stat2" style={{textTransform:"capitalize"}}>Hp: {props.data.stats[5].base_stat}</p>
     </tr>
     </table>
      
     
      <button onClick={e => props.addToTeam(props.data)} >Add to team</button>
    </div>
  )
}
//textTransform:"capitalize" is a dope ass style that capitalizes what needs to be capitalized
export default Pokemon;