"use client";
import Link from "next/link";
import { useState } from "react";

const HeaderNavItem = ({ href, label }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="transition-all duration-200 ease-in"
      style={{ color: isHover ? "skyblue" : "black" }}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default HeaderNavItem;
