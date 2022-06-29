import { constants } from "../../app";

export const initialState = {
  loading: false,
  error: null,
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case constants.GET_ALL_POST:
      return {
        ...state,
        loading: true,
        posts: [],
      };
    case constants.GET_POST_SUCCESS:
      console.log("Receiver post", action.payload);
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case constants.GET_POST_ERROR:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
