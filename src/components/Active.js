import { useContext } from "react";
import TodoContext from "./../context/todo-context";
import AddTodo from "./AddToDo";
const Active = () => {
  const { todos, toggleTodo } = useContext(TodoContext);
  const changeStatus = (id) => {
    toggleTodo(id);
  };
  const activetodos = todos.filter((todo) => todo.active === false);
  return (
    <>
      <AddTodo />
      <ul className="list">
        {activetodos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.active}
                onChange={() => changeStatus(todo.id)}
              />
              {todo.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Active;
