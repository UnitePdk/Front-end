import React, { useState } from "react";
import Box from "./common/Box";
import Circle from "./common/Circle";
import CountButton from "./common/CountButton";
import Count from "./common/Count";

function App() {
  const [count, setCount] = useState<number>(0); // 제네릭으로 숫자만으로 제한

  const plus = () => {
    setCount((prev) => prev + 1);
  };

  const minus = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount((prev) => 0);
  };

  return (
    <div className="App">
      <Box backgroundColor="green"></Box>
      <Circle bgc="pink" size="small"></Circle>
      <CountButton func={plus} operator="+"></CountButton>
      <CountButton func={minus} operator="-"></CountButton>
      <CountButton func={reset} operator="reset"></CountButton>
      <Count num={count}></Count>
    </div>
  );
}

export default App;
