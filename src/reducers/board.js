import * as types from '../actions/types';

const initialState = {
  deck: null,
  playerHands: {},
  isLoading: false,
  gameStarted: false,
  playerCount: 2
};

export default function (state = initialState, action) {
  switch(action.type) {
    case types.NEW_DECK: {
      console.log(action.payload);
      const playerCount = state.playerCount;
      const playerHands = {}
      for(let i=0;i<playerCount;i++){
        playerHands[i] = [];
      }
      return {
        ...state,
        ...action.payload, 
        gameStarted: true,
        playerHands
      }
    }

    case types.DEAL_CARDS: {
      const playerHands = {...state.playerHands};
      const playerCount = state.playerCount;
      for(let i=0;i<playerCount;i++){
        playerHands[i].push(action.payload.cards[i]);
      }
      return {...state, playerHands};
    }

    case types.REMOVE_MEMBER: {
      console.log('removing member');
      const teams = [...state.teams];
      const team = teams.find(t => t.id === action.payload.teamId);
      const memberN = team.members.findIndex(m => m.id === action.payload.member.id);
      if (memberN !== -1) {
        team.members.splice(memberN, 1);
      }

      return {...state, teams};
    }

    case types.ADD_MEMBER: {
      const teams = [...state.teams]
      const team = teams.find(t => t.id === action.payload.teamId)
      team.members.push(action.payload.employee)

      return {...state, teams};
    }

    default:
      return state;
  }
}