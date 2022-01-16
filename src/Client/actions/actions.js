import * as types from '../constants/actionTypes';

export const addEntryActionCreator = (dispatch, entryInfo) => {

}

export const fetchEntriesActionCreator = dispatch => {

}

export const setNewEntryActionCreator = newEntry => ({
  type: types.SET_NEW_ENTRY,
  payload: newEntry
})