import React, { useState } from "react";
import Window from "../common/Window";
import Button from "../common/Button";

const Calculator = () => {
  const [windowValue, setwindowValue] = useState<string>("");

  const number = (num: string) => {
    setwindowValue((prev) => prev + num);
  };
  const operator = (oper: string) => {
    if (!windowValue.includes(oper)) setwindowValue((prev) => prev + oper);
  };
  const comma = () => {
    if (!windowValue.includes(".")) setwindowValue((prev) => prev + ".");
  };
  const clear = () => {
    setwindowValue((prev) => "");
  };

  const equal = () => {
    let result = 0;
    if (windowValue.includes("+")) {
      const value = windowValue.split("+");
      result = Number(value[0]) + Number(value[1]);
    } else if (windowValue.includes("-")) {
      const value = windowValue.split("-");
      result = Number(value[0]) - Number(value[1]);
    } else if (windowValue.includes("*")) {
      const value = windowValue.split("*");
      result = Number(value[0]) * Number(value[1]);
    } else if (windowValue.includes("/")) {
      const value = windowValue.split("/");
      result = Number(value[0]) / Number(value[1]);
    }

    setwindowValue((prev) => String(result));
  };

  const style_: React.CSSProperties = {
    maxWidth: "450px",
    backgroundColor: "#b9bab4",
    border: "solid 1px black",
    margin: "20px",
    padding: "3px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "3px",
  };

  return (
    <div style={style_}>
      <Window value={windowValue}></Window>
      <Button func={clear} mark={"c"}></Button>
      <Button func={() => number("1")} mark={"1"}></Button>
      <Button func={() => number("2")} mark={"2"}></Button>
      <Button func={() => number("3")} mark={"3"}></Button>
      <Button func={() => operator("/")} mark={"/"}></Button>
      <Button func={() => number("4")} mark={"4"}></Button>
      <Button func={() => number("5")} mark={"5"}></Button>
      <Button func={() => number("6")} mark={"6"}></Button>
      <Button func={() => operator("*")} mark={"*"}></Button>
      <Button func={() => number("7")} mark={"7"}></Button>
      <Button func={() => number("8")} mark={"8"}></Button>
      <Button func={() => number("9")} mark={"9"}></Button>
      <Button func={() => operator("-")} mark={"-"}></Button>
      <Button func={comma} mark={"."}></Button>
      <Button func={() => number("0")} mark={"0"}></Button>
      <Button func={equal} mark={"="}></Button>
      <Button func={() => operator("+")} mark={"+"}></Button>
    </div>
  );
};

export default Calculator;
