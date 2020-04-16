import React, { Component } from 'react'
import '../styles/PokemonList.css'
import PokemonListObject from './PokemonListObject';

export default class PokemonList extends Component {

    state = {
        pokedexUrl: this.props.pokedexUrl,
        pokemonList: [],
        currentPokemonNumber: 1,
        }


    async componentDidMount() {
        this.setState({pokedexUrl: this.props.pokedexUrl})
        if(this.state.pokedexUrl === "https://pokeapi.co/api/v2/pokemon?limit=890") {
            const response = await fetch(this.state.pokedexUrl);
            const data = await response.json();
            const urlSplit = data.results[0].url.split('/');
            const pokemonNumber = urlSplit[urlSplit.length - 2];
            this.setState({ pokemonList: data.results, currentPokemonNumber: pokemonNumber});
        } else {
        const response = await fetch(this.state.pokedexUrl);
        const data = await response.json();
        const urlSplit = data.pokemon_entries[0].pokemon_species.url.split('/');
        const pokemonNumber = urlSplit[urlSplit.length - 2];
        this.setState({ pokemonList: data.pokemon_entries, currentPokemonNumber: pokemonNumber});
        }
    }

    callbackFunction = (childData) => {
        this.setState({currentPokemonNumber: childData});
    }

    sendPokemonNumber = () => {
        this.props.parentCallback(this.state.currentPokemonNumber);
    }

    componentDidUpdate(prevState) {
        if(prevState.currentPokemonNumber !== this.state.currentPokemonNumber) {
            this.sendPokemonNumber();
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.pokemonList ? (
                <div className="pokemon-list">
                    {this.state.pokemonList.map(pokemonEntry =>(
                        <PokemonListObject 
                            parentCallback = {this.callbackFunction}
                            key = {this.state.pokedexUrl === "https://pokeapi.co/api/v2/pokemon?limit=890" ? (pokemonEntry.name) : (pokemonEntry.pokemon_species.name)}
                            pokemonName = {this.state.pokedexUrl === "https://pokeapi.co/api/v2/pokemon?limit=890" ? (pokemonEntry.name) : (pokemonEntry.pokemon_species.name)}
                            pokemonUrl = {this.state.pokedexUrl === "https://pokeapi.co/api/v2/pokemon?limit=890" ? (pokemonEntry.url) : (pokemonEntry.pokemon_species.url)}
                        />
                        
                    ))}
                </div>
                ) : (
                    <h1>Please wait...</h1>
                )}
            </React.Fragment>
        )
    }
}
