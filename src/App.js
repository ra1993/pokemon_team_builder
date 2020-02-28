import React, { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon';
import NavBar from './components/NavBar';
import './App.css';

function App() { // the main component

  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [inputPokemon, setInputPokemon] = useState("");
  const [searchPokemon, setSearchPokemon] = useState("charizard");
  const [team, setTeam] = useState([]);

  const lookupPokemon = () => {
    const getData = async () => { 
      setIsLoading(true);
      setIsError(false); 
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`); 
        const data = await response.json(); 
     
        setPokemon(data);
      } catch(error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    getData();
  }
  
  useEffect(() => lookupPokemon(), [searchPokemon]);

  const addToTeam = (newPoke) => {
    const oldTeam =[...team];
    oldTeam.push(newPoke);
    setTeam(oldTeam);
  }

  return (
    <div className="App">
      <header className="pokeHeader">
        <NavBar />
 
        <h5>Name</h5>
        <input text="text" 
               onChange={e => setInputPokemon(e.target.value)} 
               placeholder="Name"
        />
        <br></br>
        <button className = "pickButton" onClick={e => setSearchPokemon(inputPokemon)}>Search</button> 
        <button className = "pickButton" onClick={e => setSearchPokemon(Math.floor(Math.random() * 807) + 1)}>Random!</button>
    
        {isLoading ? <p>Loading...</p> : (!isError && <Pokemon addToTeam={addToTeam} data={pokemon}/>)}
      
        {team.map((poke) => {return <p>{poke.name}</p>})}
      </header>
    </div>
  );
}

export default App; 
