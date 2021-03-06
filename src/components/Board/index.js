import React, { Component } from 'react';
import Player from '../Player';
import Deck from '../Deck';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getNewDeck, dealCards, flipCard } from '../../actions/board';
import {Button} from 'react-bootstrap';
import './Board.css';

class Board extends Component {
    constructor(props){
        super(props);
        this.dealCards = this.dealCards.bind(this);
    }
    dealCards(){
        this.props.dealCards(this.props.deck.deck_id, this.props.playerCount);
    }
    render() {
        return (
            <div className="poker-table">
                <div className="player-area">
                    <div className="player-row">
                        <Player dealer={true} playerId={0} key={0} playerHand={this.props.playerHands[0]} handValue={this.props.playerHandValues[0]} flipCard={this.props.flipCard}/>
                    </div>
                </div>
                <div className="shared-area">
                    { this.props.gameStarted
                    ? this.props.deck.remaining < this.props.playerCount?<div className="player-textbackground">Game Over!</div>: <Button onClick={this.dealCards}>Deal</Button>
                    : <Button onClick={this.props.getNewDeck}>Start New Game</Button>
                    }
                    <Deck {...this.props.deck} />
                </div>
                <div className="player-area">
                    <div className="player-row">
                        <Player playerId={1} key={1} playerHand={this.props.playerHands[1]} handValue={this.props.playerHandValues[1]} flipCard={this.props.flipCard}/>
                    </div>
                </div>
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
