import * as types from '../constants/actionTypes';

export const createEventActionCreator = (dispatch, eventInfo) => {
  fetch('http://localhost:3000/calendar/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ journal_entry: eventInfo })
  })
  .then(res=> res.json())
  .then(data => {
    console.log(data);
    dispatch({
      type: types.CREATE_EVENT,
      payload: data.new_event,
    })
  })
  .catch(err =>{
    console.log(err);
  })

}

export const retrieveAllEventsActionCreator = dispatch => {
  fetch('localhost:3000/calendar/retrieveAll')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type:types.GET_ALL_EVENTS,
      payload: data.entries,
    })
    return;
  })
  .catch(err => {
    console.log(err);
  })
}

export const retrieveOneEventActionCreator = dispatch => {
  fetch('localhost:3000/calendar/retrieveOne')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type:types.GET_ALL_EVENTS,
      payload: data.entries,
    })
    return;
  })
  .catch(err => {
    console.log(err);
  })
}