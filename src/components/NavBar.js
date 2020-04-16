import React, { Component } from 'react'
import '../styles/NavBar.css';

export default class NavBar extends Component {
    state = {
        pokemonGeneration: "All Generations",
        id: ""
    }
    sendData = () => {
        switch (this.state.id) {
            case "allgen":
                this.props.parentCallback("https://pokeapi.co/api/v2/pokemon?limit=890")
                break;
            case "gen1":
                this.props.parentCallback("https://pokeapi.co/api/v2/pokedex/kanto/")
            break;
            case "gen2":
                this.props.parentCallback("https://pokeapi.co/api/v2/pokedex/original-johto/")
            break;
            case "gen3":
                this.props.parentCallback("https://pokeapi.co/api/v2/pokedex/hoenn/")
            break;
            case "gen4":
                this.props.parentCallback("https://pokeapi.co/api/v2/pokedex/original-sinnoh/")
            break;
            case "gen5":
                this.props.parentCallback("https://pokeapi.co/api/v2/pokedex/original-unova/")
            break;
            case "gen6":
                this.props.parentCallback("https://pokeapi.co/api/v2/pokedex/kalos-central/")
            break;
            default:
                this.props.parentCallback("https://pokeapi.co/api/v2/pokemon?limit=890")
        }
    };


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top" >
                    <div className="navbar-brand mb-0">Pokedex</div>
                        <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.pokemonGeneration}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <button onClick={() => this.setState({id: "allgen", pokemonGeneration: "All Generations"}, this.sendData)} className="dropdown-item">All Generations</button>
                            <button onClick={() => this.setState({id: "gen1", pokemonGeneration: "Generation I (1996 - 1999)"}, this.sendData)} className="dropdown-item">Generation I (1996 - 1999)</button>
                            <button onClick={() => this.setState({id: "gen2", pokemonGeneration: "Generation II (1999 - 2002)"}, this.sendData)} className="dropdown-item">Generation II (1999 - 2002)</button>
                            <button onClick={() => this.setState({id: "gen3", pokemonGeneration: "Generation III (2002 - 2006)"}, this.sendData)} className="dropdown-item">Generation III (2002 - 2006)</button>
                            <button onClick={() => this.setState({id: "gen4", pokemonGeneration: "Generation IV (2006 - 2010)"}, this.sendData)} className="dropdown-item">Generation IV (2006 - 2010)</button>
                            <button onClick={() => this.setState({id: "gen5", pokemonGeneration: "Generation V (2010 - 2013)"}, this.sendData)} className="dropdown-item">Generation V (2010 - 2013)</button>
                            <button onClick={() => this.setState({id: "gen6", pokemonGeneration: "Generation VI (2013 - 2016)"}, this.sendData)} className="dropdown-item">Generation VI (2013 - 2016)</button>
                        </div>
                </nav>
            </div>
        )
    }
}
