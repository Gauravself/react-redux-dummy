import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/actions/cakes/cakeActions";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => {
      dispatch(buyCake(number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
