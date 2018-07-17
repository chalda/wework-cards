import * as types from './types';
import { getNewDeck, getCard } from '../services';


console.log(types)

export const getNewDeck = () => {
    return dispatch => {
        getNewDeck.then(data => {
            dispatch({
                type: types.NEW_DECK,
                payload: data
            });
        })
    }
}


export const fetchData = () => {
  return dispatch => {
    _fetchData.then(data => {
      dispatch({
        type: types.DATA_FETCHED,
        payload: data
      });
    });
  };
};

export const selectTeam = (team) => {
  return dispatch => {
    dispatch({
      type: types.TEAM_SELECTED,
      payload: team
    });
  };
};

export const removeMember = (teamId, member) => {
  return dispatch => {
    dispatch({
      type: types.REMOVE_MEMBER,
      payload: { teamId, member }
    });
  };
};

export const addMember = (teamId, member) => {
  return dispatch => {
    dispatch({
      type: types.ADD_MEMBER,
      payload: { teamId, member }
    });
  };
};