import * as types from '../constants/actionTypes';

const initalState = {
  totalEvents: 0,
  eventsList: [],
  lastEventId: 0,
  newEvent: '',
}

const workoutReducer = (state = initalState, action) => {
  let totalEvents;
  let eventsList;
  let lastEventId;
  let newEvent;

  switch(action.type) {
    case types.GET_ALL_EVENTS: {
      totalEvents = action.payload.length;
      eventsList = state.eventsList.slice();
      eventsList.push(...action.payload);
      console.log('Event List after unzipping data from backend and pushing: ', eventsList);

      return {
        ...state,
        totalEvents,
        eventsList,
        newEvent: '',
      };
    }


    default: {
      return state;
    }
  }
}

export default workoutReducer;