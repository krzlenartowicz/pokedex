import React, { Component } from 'react'
import '../styles/PokemonCard.css'

export default class PokemonCard extends Component {

    state = {
        currentPokemonUrl: `https://pokeapi.co/api/v2/pokemon/${this.props.currentPokemonNumber}/`,
        pokemonId: null,
        pokemonName: "",
        pokemonType: null,
        pokemonHeight: null,
        pokemonWeight: null,
        pokemonImage: "",
        pokemonStats: null
    }

    async componentDidMount () {
        const response = await fetch(this.state.currentPokemonUrl);
        const data = await response.json();
        this.setState({ 
            pokemonId: data.id,
            pokemonName: data.name.toUpperCase(),
            pokemonType: data.types,
            pokemonHeight: data.height,
            pokemonWeight: data.weight,
            pokemonImage: data.sprites.front_default,
            pokemonStats: data.stats
        })
        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="pokemon-card-container">
                    <div className="row">
                        <div className="col-12 image-section">
                            <img src={this.state.pokemonImage} alt="" className="pokemon-card-image"/>
                        </div>
                        <div className="col-12">
                            {this.state.pokemonType ? (
                                <div className="pokemon-type">
                                    {this.state.pokemonType.map(typeEntry =>(
                                        <div className="pokemon-label" key={typeEntry.type.name}>{typeEntry.type.name.toUpperCase()}</div>
                                    ))}
                                </div>
                            ) : (
                                <p>Please wait...</p>
                            )}
                        </div>
                    </div>
                    <div className="row pokemon-info-section">
                        <div className="col-6">
                            <div className="pokemon-label">ID: {this.state.pokemonId}</div>
                        </div>
                        <div className="col-6">
                            <div className="pokemon-label">HEIGHT: {this.state.pokemonHeight}</div>
                        </div>
                    </div>
                    <div className="row pokemon-info-section">
                        <div className="col-6">
                            <div className="pokemon-label">{this.state.pokemonName}</div>
                        </div>
                        <div className="col-6">
                            <div className="pokemon-label">WEIGHT: {this.state.pokemonWeight}</div>
                        </div>
                    </div>
                    {this.state.pokemonStats ? (
                        <div className="pokemon-info-section">
                            {this.state.pokemonStats.map(statEntry =>(
                                <div className="row pokemon-stats-row" key={statEntry.stat.name}>
                                    <div className="col-6">
                                        <div className="pokemon-label">{statEntry.stat.name.toUpperCase()}</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="pokemon-label">{statEntry.base_stat}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Please wait...</p>
                    )}
                </div>
            </React.Fragment>
        )
    }
}
