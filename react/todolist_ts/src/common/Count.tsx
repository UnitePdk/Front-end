import React from "react";
type CountProps = {
  num: number;
};

const Count = ({ num }: CountProps) => {
  return <span>{num}</span>;
};

export default Count;
