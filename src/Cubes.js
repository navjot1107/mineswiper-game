import React, { useState, useEffect } from "react";
import "./App.css";

function Cubes({ location }) {
  const [bgColor, setbgColor] = useState("white");

  useEffect(() => {
    if (bgColor === "red") {
      window.confirm("game over");
      window.location.reload();
    }
  }, [bgColor]);

  const handleClick = () => {
    if (location > 15) {
      setbgColor("green");
    } else {
      setbgColor("red");
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ backgroundColor: bgColor }}
      ></button>
    </div>
  );
}

export default Cubes;
