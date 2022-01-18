import * as types from '../constants/actionTypes'

const initialState = {
  showModal: false,
  username : '',
  password: '',
  eventInfo: {},
  display: {},
}

const modalReducer = (state = initialState, action) => {
  let showModal;
  let username;
  let password;
  let eventInfo;
  let display;

  switch(action.type){
    case types.DISPLAY_LOGIN_MODAL: {

    }
    case types.HANDLE_CLOSE: {

    }
    case types.HANDLE_DISPLAY_EVENT: {
      display = action.payload
      return{
        ...state,
        display,
      }
    }
    case types.HANDLE_SIGN_UP: {

    }
    case types.SHOW_MODAL_TOGGLE: {
      showModal = action.payload;
      return {
        ...state, 
        showModal,
      }
    }
    default: {
      return state;
    }
  }
}

export default modalReducer;