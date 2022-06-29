import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useThemeStore } from "./app/hooks";

import "./assets/style/global.css";
import Home from "./features/Home";
import About from "./features/About";
import NotFound from "./components/NotFound";

function App() {
  const [state] = useThemeStore();

  return (
    <div className="wrapper" style={state.isLightTheme ? state.light : state.dark}>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>;
          <Route path="about" element={<About />}></Route>;
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
