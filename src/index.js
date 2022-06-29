import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/global.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { PostProvider, ThemeProvider } from "./store";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8002";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
