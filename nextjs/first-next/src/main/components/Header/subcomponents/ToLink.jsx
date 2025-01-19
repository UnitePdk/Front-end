import Link from "next/link";
import React from "react";

const ToLink = ({ url, text }) => {
  return <Link href={url}>{text}</Link>;
};

export default ToLink;
