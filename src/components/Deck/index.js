import React, { Component } from 'react';

//<Card value={card.value} suit={card.suit}/>

const suitConvertion = {
    DIAMOND: "diams",
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

class Deck extends Component {
    shouldComponentUpdate(){
        return true;
    }
    render() {
        console.log("rendering card", this.props);

        return (
            <li>
                <div className={`card rank-${valueConvertion[this.props.value]} ${suitConvertion[this.props.suit]}`}/>
            </li>
        )
    }
}

export default Deck;