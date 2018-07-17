import React, { Component } from 'react';
import Player from './components/Player';
import { getDeck } from '../services';
import _ from 'lodash';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            gameStarted: false,
            deck: null,

        }
    }
    componentWillMount(){


    }
    
    render() {
        return (
            <div>
                {this.props.cards}
            </div>
        );
    }
}

export default Player;
