import * as types from '../actions/types';

const initialState = {
  deck: null,
  playerHands: {},
  playerHandValues: {},
  isLoading: false,
  gameStarted: false,
  playerCount: 2
};

const cardValueConvertion = {
  ACE: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  JACK: 10,
  QUEEN: 10,
  KING: 10
}

export default function (state = initialState, action) {
  switch(action.type) {
    case types.NEW_DECK: {
      console.log(action.payload);
      const playerCount = state.playerCount;
      const playerHands = {};
      const playerHandValues = {};
      for(let i=0;i<playerCount;i++){
        playerHands[i] = [];
        playerHandValues[i] = 0;
      }
      return {
        ...state,
        ...action.payload, 
        gameStarted: true,
        playerHands,
        playerHandValues
      }
    }

    case types.DEAL_CARDS: {
      const playerHands = {...state.playerHands};
      const playerCount = state.playerCount;
      for(let i=0;i<playerCount;i++){
        playerHands[i].push({ ...action.payload.cards[i], revealed: false});
      }
      return {...state, playerHands};
    }

    case types.FLIP_CARD: {
      const playerHands = {...state.playerHands};
      const playerHandValues = {...state.playerHandValues};
      const card = playerHands[action.payload.playerId][action.payload.cardIndex];
      playerHands[action.payload.playerId][action.payload.cardIndex].revealed = true;
      playerHandValues[action.payload.playerId]+= cardValueConvertion[card.value];

      return {...state, playerHands, playerHandValues};
    }

    // case types.REMOVE_MEMBER: {
    //   console.log('removing member');
    //   const teams = [...state.teams];
    //   const team = teams.find(t => t.id === action.payload.teamId);
    //   const memberN = team.members.findIndex(m => m.id === action.payload.member.id);
    //   if (memberN !== -1) {
    //     team.members.splice(memberN, 1);
    //   }

    //   return {...state, teams};
    // }

    // case types.ADD_MEMBER: {
    //   const teams = [...state.teams]
    //   const team = teams.find(t => t.id === action.payload.teamId)
    //   team.members.push(action.payload.employee)

    //   return {...state, teams};
    // }

    default:
      return state;
  }
}