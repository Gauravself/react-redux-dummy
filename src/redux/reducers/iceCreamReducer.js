const { BUY_ICECREAM } = require("../actions/iceCream/iceCreamType");
const initialStateIce = {
  numOfIceCream: 20,
};

export const iceCreamReducer = (state = initialStateIce, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};
