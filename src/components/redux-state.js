const redux = require("redux");
const createStore = redux.legacy_createStore;

const initialState = {
  name: "Gaurav Rastogi",
  address: {
    street: "Shankar Nagar",
    city: "New Delhi",
    state: "Delhi",
  },
};

const STREET_UPDATE = "STREET_UPDATED";

const updateStreet = (street) => {
  return { type: STREET_UPDATE, payload: street };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
//Log initial State
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(updateStreet("Krishna Nagar"));
unsubscribe();
