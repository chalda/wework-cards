import React, { Component } from 'react';
import Player from '../Player';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getNewDeck, dealCards, flipCard } from '../../actions/board';
import {Button} from 'react-bootstrap';

class Board extends Component {
    constructor(props){
        super(props);
        this.dealCards = this.dealCards.bind(this);
    }
    dealCards(){
        console.log("dealCards props:",this.props)
        this.props.dealCards(this.props.deck.deck_id, this.props.playerCount);
    }
    render() {
        console.log("render props", this.props)
        return (
            <div>
                <Player dealer={true} playerId={0} key={0} playerHand={this.props.playerHands[0]} handValue={this.props.playerHandValues[0]} flipCard={this.props.flipCard}/>
                { this.props.gameStarted
                ? <Button onClick={this.dealCards}>Deal</Button>
                : <Button onClick={this.props.getNewDeck}>Star tNew Game</Button>
                }
                <Player playerId={1} key={1} playerHand={this.props.playerHands[1]} handValue={this.props.playerHandValues[1]} flipCard={this.props.flipCard}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log("map state to props state", state);
    return {
        ...state.board
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNewDeck: bindActionCreators(getNewDeck, dispatch),
        dealCards: bindActionCreators(dealCards, dispatch),
        flipCard: bindActionCreators(flipCard, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
