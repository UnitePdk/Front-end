import { useState } from "react";
import Button from "../atom/Button";
import Input from "../atom/Input";
import { FaRegPlusSquare } from "react-icons/fa";

type AddTodoProps = {
  func: (todo: string) => void;
};

const AddTodo = ({ func }: AddTodoProps) => {
  const [input, setInput] = useState<string>("");

  const change = (input: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => input.target.value);
    console.log(input.target.value);
  };

  return (
    <div className="bg-white p-3 flex gap-3">
      <Input placeholder="Add a new Task..." func={change}></Input>
      <Button
        css="text-2xl text-justify text-center text-white bg-blue-400 w-8 h-8"
        Icon={FaRegPlusSquare}
        func={() => func(input)}
      ></Button>
    </div>
  );
};

export default AddTodo;
