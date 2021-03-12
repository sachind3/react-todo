import { useContext } from "react";
import TodoContext from "./../context/todo-context";
import AddToDo from "./AddToDo";
const All = () => {
  const { todos, toggleTodo } = useContext(TodoContext);
  const test = (id) => {
    toggleTodo(id);
  };
  return (
    <>
      <AddToDo />
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.active}
                onChange={() => test(todo.id)}
              />
              {todo.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default All;
