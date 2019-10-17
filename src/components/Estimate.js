import React, { useReducer } from "react";
import Error from "./Error";

const initialState = {
  toliks: 5,
  error: null
};

const reducer = (state, action) => {
  let error;
  switch (action.type) {
    case "increase":
      error = state.toliks + 1 > 9 ? "much" : null;
      return {
        toliks: error ? state.toliks : state.toliks + 1,
        error
      };
    case "decrease":
      error = state.toliks - 1 < 1 ? "little" : null;
      return {
        toliks: error ? state.toliks : state.toliks - 1,
        error
      };
    default:
      return state;
  }
};

const Estimate = () => {
  const [{ toliks, error }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Estimate: {toliks} Toliks
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <Error error={error} />
    </div>
  );
};

export default Estimate;
