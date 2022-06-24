import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/actions/cakes/cakeActions";

const HooksCakeContainer = () => {
  const cakeSelector = useSelector((state) => state.numOfCake);
  const cakeDispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes Hooks - {cakeSelector} </h2>
      <button onClick={() => cakeDispatch(buyCake())}>Buys Cakes</button>
    </div>
  );
};

export default HooksCakeContainer;
