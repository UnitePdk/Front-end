import React from "react";
type WindowProps = {
  value: string;
};

const Window = ({ value }: WindowProps) => {
  const style_: React.CSSProperties = {
    display: "flex",
    borderRadius: "5px",
    border: "solid 2px black",
    fontSize: "x-large",
    height: "60px",
    paddingRight: "20px",
    justifyContent: "right",
    alignItems: "center",
    gridArea: "1 / 1 / 2 / 4",
  };
  return <div style={style_}>{value}</div>;
};

export default Window;
