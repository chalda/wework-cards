import React, { Component } from 'react';
import Card from '../Card';
import _ from 'lodash';
import './Player.css';

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
        return (
            <div className="player">
                <div className="player-textbackground">
                    <div className="pull-left player-name">{this.props.dealer?"Dealer":`Player ${this.props.playerId}`}</div>
                    <div className="pull-right player-score">Score: {this.props.handValue}</div>
                    <div className="clearfix"/>
                </div>
                <div className="playingCards twoColours rotateHand">
                    <ul className="hand">
                        {
                            this.renderHand()
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Player;
