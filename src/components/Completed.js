import { useContext } from "react";
import TodoContext from "./../context/todo-context";
import { MdDelete } from "react-icons/md";
const Completed = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
  const completedtodos = todos.filter((todo) => todo.active !== false);
  const changeStatus = (id) => {
    toggleTodo(id);
  };
  return (
    <ul className="list">
      {completedtodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.active}
              onChange={() => changeStatus(todo.id)}
            />
            {todo.text}
            <button
              type="button"
              className="deleteBtn"
              onClick={() => deleteTodo(todo.id)}
            >
              <MdDelete />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Completed;
