import { useState } from "react";
import Text from "./atom/Text";
import AddTodo from "./molecules/AddTodo";
import TodoList from "./organism/TodoList";

function App() {
  const [list, setList] = useState<string[]>([
    "아침먹기",
    "점심먹기",
    "저녁먹기",
  ]);
  const add = (todo: string) => {
    setList((prev) => [...prev, todo]);
  };
  return (
    <div className="App bg-sky-400 flex flex-col items-center mx-auto h-full">
      <Text text="To-Do List"></Text>
      <AddTodo func={add} />
      <TodoList todoes={list} />
    </div>
  );
}

export default App;
