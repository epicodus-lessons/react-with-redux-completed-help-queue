import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
  case c.ADD_TICKET:
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
        timeOpen: timeOpen,
        formattedWaitTime: formattedWaitTime
      }
    });
  case c.UPDATE_TICKET_ISSUE:
    const newStateUpdate = Object.assign({}, state, {
      [id]: Object.assign({}, state[id], {
        issue: issue,
      }),
    });
    return newStateUpdate;
  // case c.UPDATE_TICKET:
  //   return {
  //     ...state,
  //     [id]: {
  //       ...state[id],
  //       ...action.updates
  //     }
  //   };
  case c.DELETE_TICKET:
    const newState = { ...state };
    delete newState[id];
    return newState; 
  case c.UPDATE_TIME:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    const updatedState = Object.assign({}, state, {
      [id]: newTicket
    });
    return updatedState;
  default:
    return state;
  }
};