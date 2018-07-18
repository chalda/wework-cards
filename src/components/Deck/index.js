import React, { Component } from 'react';
import './Deck.css';


class Deck extends Component {
    render() {
        console.log(
            "rendering", Math.floor(this.props.remaining/2)
        )
        return (
            <div className="playingCards deck-right">
                <ul className="deck">
                    {
                        Array.from( {length: Math.ceil(this.props.remaining/4)}, (item, index) => 
                        <li key={index}>
                            <div className="card back">*</div>
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Deck;