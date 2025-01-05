import React from "react";
type ButtonProps = {
  func: () => void;
  operator: string;
};

const CountButton = ({ func, operator }: ButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "orange",
    border: "none",
    margin: "3px",
  };

  return (
    <button style={buttonStyle} onClick={func}>
      {operator}
    </button>
  );
};

export default CountButton;
