import * as types from '../constants/actionTypes';

export const createEventActionCreator = (dispatch, eventInfo) => {
  console.log('Event Info start date: ', eventInfo.start, typeof eventInfo.start);
  console.log('Event info: ', eventInfo);
  fetch('http://localhost:3000/calendar/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: eventInfo._id, title: eventInfo.title, weight: eventInfo.weight, reps: eventInfo.reps, start: eventInfo.start, end: eventInfo.end })
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
  fetch('http://localhost:3000/calendar/retrieveAll')
  .then(res => res.json())
  .then(data => {
    console.log(data.entries);
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