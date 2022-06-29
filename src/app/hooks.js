import { useContext } from "react";
import { ThemeContext, PostContext } from "../store";

const useThemeStore = () => {
  const [state, dispatch] = useContext(ThemeContext);
  return [state, dispatch];
};

const usePostStore = () => {
  const [postsReducer, postDispatch] = useContext(PostContext);
  return [postsReducer, postDispatch];
};

export { useThemeStore, usePostStore };
