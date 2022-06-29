import React from "react";
import { Link } from "react-router-dom";

import Theme from "../Icons/Theme";

import { themeActions } from "../../store";
import { useThemeStore } from "../../app/hooks";

import "./Header.css";

const Header = () => {
  const [state, dispatch] = useThemeStore();

  return (
    <div className="container">
      <div className="navbar">
        <div>
          <h2>luccui.</h2>
        </div>
        <div>
          <Link to="/" style={state.isLightTheme ? state.light : state.dark}>
            Trang chủ
          </Link>
          <Link
            to="/about"
            style={state.isLightTheme ? state.light : state.dark}
          >
            Giới thiệu
          </Link>
          <button onClick={(e) => dispatch(themeActions.toggleTheme())}>
            <Theme
              fill={state.isLightTheme ? state.light.color : state.dark.color}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
