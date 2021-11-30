import React from 'react';
import { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

const Split = React.lazy(() => import("./Split"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Say Hi</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <Split />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
