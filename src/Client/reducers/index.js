import { combineReducers } from "redux";

import workoutReducer from "./workoutReducer";

const reducers = combineReducers ({
  workouts: workoutReducer,
});

export default reducers;