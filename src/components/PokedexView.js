import React, { PureComponent } from 'react'
import '../styles/PokedexView.css';
import PokemonCard from './PokemonCard';
import PokemonList from './PokemonList';

export default class PokedexView extends PureComponent {
    state = { 
        pokedexUrl: this.props.pokedexUrl,
        currentPokemonNumber: 1
    };

    callbackFunction = (childData) => {
        this.setState({currentPokemonNumber: childData})
    }

    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <PokemonCard key={this.state.currentPokemonNumber} currentPokemonNumber = {this.state.currentPokemonNumber}/>
                        </div>
                        <div className="col-xs-12 col-md-5">
                            <PokemonList parentCallback = {this.callbackFunction} key = {this.props.pokedexUrl} pokedexUrl = {this.props.pokedexUrl} offset = {this.state.offset}/>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
