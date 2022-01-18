import * as types from '../constants/actionTypes';
// Workout Action Creators
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
export const retrieveOneEventActionCreator = (dispatch, id) => {
  fetch(`http://localhost:8080/articles/retrieveOne?id=${id}`)
  .then(res => res.json())
  .then(data => {
    dispatch({
      type:types.GET_ONE_EVENT,
      payload: data.entries,
    })
    return;
  })
  .catch(err => {
    console.log(err);
  })
}
export const updateEventActionCreator = (dispatch, eventInfo) => {
  fetch('http://localhost:3000/calendar/updateOne', {
    method: 'PUT',
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
      type: types.UPDATE_EVENT,
      payload: data.entries,
    })
  })
  .catch(err =>{
    console.log(err);
  })
}
export const deleteEventActionCreator = (dispatch, eventId) => {
  
}
//Modal Action Creators
export const displayLoginModalActionCreator = () => {

}
export const handleCloseActionCreator = () => {

}
export const handleDisplayEventActionCreator = display => ({
  type: types.HANDLE_DISPLAY_EVENT,
  payload: display,
})
export const handleSignupActionCreator = () => {

}
export const setShowModalActionCreator = modalBool => ({
  type: types.SHOW_MODAL_TOGGLE,
  payload: modalBool,
})