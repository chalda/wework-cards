import React, { Component } from 'react';

//<Card value={card.value} suit={card.suit}/>

const suitConvertion = {
    DIAMONDS: "diams",
    HEARTS: "hearts",
    SPADES: "spades",
    CLUBS: "clubs"
}
const valueConvertion = {
    ACE: "a",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    JACK: "j",
    QUEEN: "q",
    KING: "k"
}

class Card extends Component {
    render() {
        const rank = valueConvertion[this.props.value];
        const suit = suitConvertion[this.props.suit];
    
        let className;
        let onClick = null;
        if(this.props.revealed){
            className=`card rank-${rank} ${suit}`;
        } else { 
            className="card back";
            onClick= this.props.flipCard;
        }
        console.log("rendering card", this.props);
        return (
            <li>
                <div className={className} onClick={onClick}>
                    <span class="rank">{rank.toUpperCase()}</span>
                    <span class="suit"></span>
                </div>
            </li>
        )
    }
}

export default Card;