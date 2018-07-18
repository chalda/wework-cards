import React, { Component } from 'react';
import Card from '../Card';
import _ from 'lodash';

class Player extends Component {
    constructor(props){
        super(props);
        this.renderHand = this.renderHand.bind(this);
    }
    renderHand(){
        const hand = _.map(this.props.playerHand, (card, index) => {
            return (<Card value={card.value} suit={card.suit} revealed={card.revealed} key={index} flipCard={this.props.flipCard.bind(this, this.props.playerId, index)}/>);
        });
        return hand;
    }

    render() {
        console.log("rendering player", this.props);
        return (
            <div className="playingCards twoColours rotateHand">
                <div className="valueCounter">{this.props.handValue}</div>
                <ul className="hand">
                    {
                        this.renderHand()
                    }
                </ul>
            </div>
        );
    }
}

export default Player;
