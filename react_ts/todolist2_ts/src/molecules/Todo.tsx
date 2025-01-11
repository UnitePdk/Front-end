import { useState } from "react";
import CheckBox from "../atom/CheckBox";
import Label from "../atom/Label";
import Button from "../atom/Button";
import { FaTrashAlt } from "react-icons/fa";

type TodoProps = {
  label: string;
};

const Todo = ({ label }: TodoProps) => {
  const [check, setCheck] = useState(false);

  const change = () => {
    setCheck((prev) => !prev);
  };

  const delete_ = () => {};

  return (
    <li className="bg-sky-200 flex justify-between p-4">
      <div>
        <CheckBox check={check} change={() => change} />
        <Label label={label} line={check} />
      </div>
      <div>
        <Button css="" Icon={FaTrashAlt} func={delete_} />
      </div>
    </li>
  );
};

export default Todo;
