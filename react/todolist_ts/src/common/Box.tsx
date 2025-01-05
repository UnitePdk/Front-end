import React from "react";
type BoxProps = {
  backgroundColor: string;
};

const Box = (props: BoxProps) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
};

export default Box;
