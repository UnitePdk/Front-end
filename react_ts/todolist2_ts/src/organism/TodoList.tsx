import Todo from "../molecules/Todo";

type TodoListProps = {
  todoes: string[];
};

const TodoList = ({ todoes }: TodoListProps) => {
  return (
    <ul className="flex flex-col justify-between shadow-md p-5 bg-white m-8 w-2/3 gap-3">
      {todoes.map((v) => (
        <Todo label={v} />
      ))}
    </ul>
  );
};

export default TodoList;
