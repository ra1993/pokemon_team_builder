import React, { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon';
import NavBar from './components/NavBar';
import './App.css';

function App() { // the main component
  // html - hyper text markup language
  // css - computational style sheet
  // json - javascript object notation

  // create stateful variables, pokemon is the variable and 
  // setPokemon is the function that updates the variable
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [inputPokemon, setInputPokemon] = useState("");
  const [searchPokemon, setSearchPokemon] = useState("charizard");
  const [team, setTeam] = useState([]);

  const lookupPokemon = () => {
    const getData = async () => { // defining a function with the async keyword
      setIsLoading(true);
      setIsError(false); 
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`); // fetch returns a Promise data type
        const data = await response.json(); // converts the promise to json
        // console.log(data);
        setPokemon(data);
      } catch(error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    getData();
  }

  //implementing hooks, useEffect takes a function and a variable, whenever the variable changes, it does the function
  useEffect(() => lookupPokemon(), [searchPokemon]);

  const addToTeam = (newPoke) => {
    const oldTeam =[...team];
    oldTeam.push(newPoke);
    setTeam(oldTeam);
  }



// && in html without an if
// (statement1) && (statement2)
// if statement1 is true it returns statement2
// if statement1 is false it returns itself
// doesn't return a bool unless you have the if

// if (condition1 && condition2) {}
  return (
    <div className="App">
      <header className="pokeHeader">
        <NavBar />
        {/* {pokemon.types[0].type.name} will give you an error because 
        before you click the button, react lets you go one level deep and 
        gives you undefined, any more than that it will return an error*/}

        {/* Forms in HTML refreshes the pages every time you submit because
        it sends a post request, you can prevent default using preventDefault*/}
        <h5>Name</h5>
        <input text="text" 
               onChange={e => setInputPokemon(e.target.value)} // Event Listener
               placeholder="Name"
        />
        <br></br>
        <button className = "pickButton" onClick={e => setSearchPokemon(inputPokemon)}>Search</button> 
        <button className = "pickButton" onClick={e => setSearchPokemon(Math.floor(Math.random() * 807) + 1)}>Random!</button>
        {/*setSearchPokemon is not a function but this still works because 
        searchPokemon is connected to a useEffect which connects it to getData function */}
        {/* <p>{pokemon.name && pokemon.name}</p> displays charizard if the pokemon.name attribute exists */}
        {isLoading ? <p>Loading...</p> : (!isError && <Pokemon addToTeam={addToTeam} data={pokemon}/>)}
        {/* {isError && <p>Error in Fetch Request</p>} */}\
        {/* display the pokemon on our team */}
        {team.map((poke) => {return <p>{poke.name}</p>})}
      </header>
    </div>
  );
}

export default App; 
