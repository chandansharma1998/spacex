
import { combineReducers } from "redux";
import DataReducer from "./DataReducer";

const allReducers = combineReducers({
   myData : DataReducer
})

export default allReducers;