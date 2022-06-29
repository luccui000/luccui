import React, { useReducer } from "react";
import Context from "./Context";
import reducer, { initialState } from "./reducer";

const Provider = ({ children }) => {
  const [postsReducer, postDispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[postsReducer, postDispatch]}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
