import React from "react";
type NumberProps = {
  func: () => void;
  mark: string;
};

const Button = ({ func, mark }: NumberProps) => {
  const style_: React.CSSProperties = {
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4a3f42",
    color: "white",
    fontSize: "x-large",
    width: "100px",
    height: "60px",
    margin: "3px",
  };

  return (
    <button style={style_} onClick={func}>
      {mark}
    </button>
  );
};

export default Button;
