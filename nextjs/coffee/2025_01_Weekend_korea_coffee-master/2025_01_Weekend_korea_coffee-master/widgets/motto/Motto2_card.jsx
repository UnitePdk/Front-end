import React from "react";

const Motto2_card = ({ title, content }) => {
  return (
    <div className="w-96 h-96 m-auto bg-red-300 pt-32 text-white">
      <h3 className="text-base p-4">{title}</h3>
      <h3 className="text-2xl">{content}</h3>
    </div>
  );
};

export default Motto2_card;
