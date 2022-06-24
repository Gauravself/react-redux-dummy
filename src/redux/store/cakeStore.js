const redux = require("redux");
const createStore = redux.legacy_createStore;
const { rootReducer } = require("../reducers/rootReducer");

const store = createStore(rootReducer);

export default store;
