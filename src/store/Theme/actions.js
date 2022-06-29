import { constants } from "../../app";

export const toggleTheme = (payload) => {
  return {
    type: constants.TOGGLE_THEME,
    payload,
  };
};
