import React, { Component } from 'react';
import Card from '../Card';
import _ from 'lodash';

class Player extends Component {
    shouldComponentUpdate(){
        return true;
    }
    renderHand(){
        const hand = _.map(this.props.playerHand, (card, index) => {
            return (<Card value={card.value} suit={card.suit}/>);
        });
        console.log(hand);
        return hand;
    }

    render() {
        console.log("rendering player", this.props);
        return (
            <div className="playingCards fourColours rotateHand">
                <div className="valueCounter"/>
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
