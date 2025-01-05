import React from "react";
import Calculator from "./container/Calculator";

function App() {
  const style_: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div className="App" style={style_}>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
