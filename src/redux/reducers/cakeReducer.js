const { BUY_CAKE } = require("../actions/cakes/cakeType");
const initialState = {
  numOfCake: 10,
};
export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };
    default:
      return state;
  }
};
