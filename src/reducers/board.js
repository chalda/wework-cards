import * as types from '../actions/types';

const initialState = {
  teams: [],
  positions: [],
  employees: [],
  isLoading: true
};

export default function (state = initialState, action) {
  switch(action.type) {
    case types.NEW_DECK: {
      console.log(action.payload);
      return {
        ...action.payload, 
        isLoading: false
      }
    }

    case types.TEAM_SELECTED: {
      const teams = [...state.teams];
      teams.forEach(team => {
        team.selected = (team.id === action.payload.id ? !team.selected : team.selected);
      });
      return {...state, teams};
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