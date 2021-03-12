import { useContext, useState } from "react";
import TodoContext from "./../context/todo-context";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime().toString(),
      text: todo,
      active: false,
    };
    addTodo(newTodo);
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit} className="form-group">
      <input
        type="text"
        placeholder="add details"
        className="form-control"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="addBtn">Add</button>
    </form>
  );
};

export default AddTodo;
