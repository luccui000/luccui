import { useReducer } from "react";
import Contenxt from "./Context";
import reducer, { initialState } from "./reducer";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Contenxt.Provider value={[state, dispatch]}>{children}</Contenxt.Provider>
  );
};
export default Provider;
