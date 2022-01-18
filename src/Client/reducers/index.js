import { combineReducers } from "redux";

import workoutReducer from "./workoutReducer";
import modalReducer from './modalReducer';

const reducers = combineReducers ({
  workouts: workoutReducer,
  modals: modalReducer,
});

export default reducers;