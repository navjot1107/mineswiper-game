import React from "react";
import "./App.css";
import Cubes from "./Cubes";

function App() {
  let boxes = [];

  while (boxes.length < 60) {
    var r = Math.floor(Math.random() * 60) + 1;
    if (boxes.indexOf(r) === -1) boxes.push(r);
  }

  return (
    <div className="app">
      <div className="header">Minesweeper game</div>
      {boxes.map((item) => (
        <div className="body">
          <Cubes location={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
