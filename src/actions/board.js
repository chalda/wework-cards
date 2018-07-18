import * as types from './types';

const API_URL = "https://deckofcardsapi.com";

export const getNewDeck = () => {
    const path = "/api/deck/new/shuffle/?deck_count=1";
    const url = API_URL + path;
    //return fetch(url, options).then(response => response.text());

    return dispatch => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({
            type: types.NEW_DECK,
            payload: { deck: data }
        });
      })

    }
}

export const dealCards = (deck_id, playerCount) => {
  const path = `/api/deck/${deck_id}/draw/?count=${playerCount}`;
  const url = API_URL + path;
  //return fetch(url, options).then(response => response.text());

  return dispatch => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch({
          type: types.DEAL_CARDS,
          payload: data
      });
    })
    
  }
}

export const flipCard = (playerId, cardIndex) => {
  return dispatch => {
    dispatch({
        type: types.FLIP_CARD,
        payload: {
          playerId,
          cardIndex
        }
    })
  }
}



// export const fetchData = () => {
//   return dispatch => {
//     _fetchData.then(data => {
//       dispatch({
//         type: types.DATA_FETCHED,
//         payload: data
//       });
//     });
//   };
// };

// export const selectTeam = (team) => {
//   return dispatch => {
//     dispatch({
//       type: types.TEAM_SELECTED,
//       payload: team
//     });
//   };
// };

// export const removeMember = (teamId, member) => {
//   return dispatch => {
//     dispatch({
//       type: types.REMOVE_MEMBER,
//       payload: { teamId, member }
//     });
//   };
// };

// export const addMember = (teamId, member) => {
//   return dispatch => {
//     dispatch({
//       type: types.ADD_MEMBER,
//       payload: { teamId, member }
//     });
//   };
// };