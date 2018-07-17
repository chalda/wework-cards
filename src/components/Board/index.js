import React, { Component } from 'react';
import Player from './components/Player';
import { getNewDeck } from '../services';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            gameStarted: false,
            deck: null,

        }
    }
    componentWillMount(){


    }

    startGame(){
        //request new deck
        getNewDeck()
        .then(data =>{
            this.setState({deck: data, gameStarted: true});
        })
    }
    
    render() {
        return (
            <div>
                <Player dealer={true}/>
                {this.state.gameStarted? <button onClick={this.startGame}>New Game</button> : null }
                <Player />
            </div>
        );
    }
}

export default Board;
