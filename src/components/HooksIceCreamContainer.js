import React from "react";
import { buyIceCream } from "../redux/actions/iceCream/iceCreamActions";
import { useSelector, useDispatch } from "react-redux";

const HooksIceCreamContainer = () => {
  const IceCreamSelector = useSelector((state) => state.iceCream.numOfIceCream);
  const IceCreamDispatch = useDispatch();
  return (
    <div>
      <h2>Number Of IceCream Hooks - {IceCreamSelector}</h2>
      <button onClick={() => IceCreamDispatch(buyIceCream())}>
        Buy IceCream
      </button>
    </div>
  );
};

export default HooksIceCreamContainer;
