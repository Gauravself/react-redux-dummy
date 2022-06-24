import { combineReducers } from "redux";
import { cakeReducer } from "../reducers/cakeReducer";
import { iceCreamReducer } from "./iceCreamReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
