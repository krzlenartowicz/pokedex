import React, { Component } from 'react'
import '../styles/PokemonListObject.css';

export default class PokemonListObject extends Component {

    state = {
        pokemonName: "",
        pokemonNumber: null,
        pokemonImage: "",
    }

    componentDidMount() {
        const pokemonName = this.props.pokemonName.toUpperCase();
        const pokemonUrl = this.props.pokemonUrl;
        const urlSplit = pokemonUrl.split('/');
        const pokemonNumber = urlSplit[urlSplit.length - 2];
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`

        this.setState({
            pokemonName,
            pokemonNumber,
            pokemonImage,
        })
    }

    sendPokemonNumber = () => {
        this.props.parentCallback(this.state.pokemonNumber);
    }

    render() {
        return (
            <div onClick={this.sendPokemonNumber} className="pokemon-container">
                <div className="row">
                    <div className="col-3">
                        <h5 className="pokemon-number">#{this.state.pokemonNumber}</h5>  
                    </div>
                    <div className="col-2">
                        <img src={this.state.pokemonImage} alt="" className="pokemon-image"/>
                    </div>
                    <div className="col-7">
                        <p className="pokemon-name">{this.state.pokemonName}</p>
                    </div>
                </div>
            </div>
        )
    }
}
