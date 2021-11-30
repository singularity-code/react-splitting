import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";

const Split = loadable(() => import("./Split"), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    Split.preload();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Say Hi</p>
        {visible && <Split />}
      </header>
    </div>
  );
}

export default App;
