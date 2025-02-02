"use client";
import { getRandom } from "@/utils/utils";
import Bar from "./Bar";
import { useEffect, useState } from "react";

const ContentsCard = ({ imageSrc, type, title }) => {
  const [random, setRandom] = useState(0);
  useEffect(() => {
    setRandom(() => getRandom(0, 3));
  }, []);

  return (
    <li className="flex flex-col gap-4 w-fit">
      <img
        className={`w-60 h-${32 * random} object-cover`}
        src={imageSrc}
        alt=""
      />
      <span className="text-slate-200 text-xs">{type}</span>
      <div className="flex items-center gap-4">
        <Bar />
        <strong className="text-xs">{title}</strong>
      </div>
    </li>
  );
};

export default ContentsCard;
