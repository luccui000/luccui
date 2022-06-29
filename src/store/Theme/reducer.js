import { TOGGLE_THEME } from "../../app/constants";

const initialState = {
  isLightTheme: window.localStorage.getItem("theme") === "light",
  light: {
    backgroundColor: "#fff",
    color: "#2d2d2d",
    textDecoration: "none",
    transition: "background-color .2s linear",
  },
  dark: {
    backgroundColor: "#2d2d2d",
    color: "#fff",
    textDecoration: "none",
    transition: "background-color .2s linear",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      window.localStorage.setItem(
        "theme",
        state.isLightTheme ? "dark" : "light"
      );
      return {
        ...state,
        isLightTheme: !state.isLightTheme,
      };
    default:
      throw new Error("Invalid action");
  }
};

export { initialState };
export default reducer;
