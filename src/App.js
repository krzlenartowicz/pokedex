import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import NavBar from './components/NavBar';
import PokedexView from './components/PokedexView';

class App extends Component {
  state = { 
    pokedexUrl:"https://pokeapi.co/api/v2/pokemon?limit=890" 
  };

  callbackFunction = (childData) => {
      this.setState({pokedexUrl: childData});
  };

  render(){
    return (
      <div className="App">
        <NavBar parentCallback = {this.callbackFunction}/>
        <PokedexView pokedexUrl = {this.state.pokedexUrl}/>
      </div>
    );
  }  
}

export default App;
