import { TOGGLE_THEME } from "./constants";

export const toggleTheme = (payload) => {
  return {
    type: TOGGLE_THEME,
    payload,
  };
};
