import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
const redux = require("redux");
const createStore = redux.legacy_createStore;
const { rootReducer } = require("../reducers/rootReducer");

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
