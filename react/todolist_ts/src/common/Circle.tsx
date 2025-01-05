import React from "react";
type CircleProps = {
  bgc: "pink" | "skyblue" | "green";
  size: "small" | "medium" | "large";
};
const Circle = ({ bgc, size }: CircleProps) => {
  let size_px;
  switch (size) {
    case "small":
      size_px = 50;
      break;
    case "medium":
      size_px = 100;
      break;
    case "large":
      size_px = 200;
      break;
  }
  // 오브젝트 방식
  const sizeObject = {
    small: { width: "50px", height: "50px" },
    medium: { width: "50px", height: "50px" },
    large: { width: "50px", height: "50px" },
  };
  return (
    <div
      style={{
        width: size_px,
        height: size_px,
        borderRadius: "999px",
        backgroundColor: bgc,
      }}
    ></div>
  );
};

export default Circle;
