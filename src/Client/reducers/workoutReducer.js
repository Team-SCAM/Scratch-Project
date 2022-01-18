import * as types from '../constants/actionTypes';

const initalState = {
  totalEvents: 0,
  eventsList: [],
  lastEventId: 0,
  newEvent: '',
  retrievedEvent: [],
}

const workoutReducer = (state = initalState, action) => {
  let totalEvents;
  let eventsList;
  let lastEventId;
  let newEvent;
  let retrievedEvent;

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
    case types.CREATE_EVENT: {
      totalEvents = state.totalEvents + 1;
      eventsList = state.eventsList.slice();
      eventsList.push(action.payload);

      return {
        ...state,
        totalEvents,
        eventsList,
        newEvent: '', 
      };
    }
    case types.GET_ONE_EVENT: {
      retrievedEvent = state.retrievedEvent.slice();
      retrievedEvent.push(action.payload);

      return {
        ...state,
        retrievedEvent,
        newEvent: '',
      }
    }
    case types.UPDATE_EVENT: {
      //get one should be called before this to identify which event to update, then we pass that event into our action creator to be our payload
      //maybe remove old event from eventsList then push the updated event onto the list?
      retrievedEvent = state.retrievedEvent.slice();
      retrievedEvent[0]= action.payload;
      return {
        ...state,
        retrievedEvent,
      }
    }
    default: {
      return state;
    }
  }
}

export default workoutReducer;