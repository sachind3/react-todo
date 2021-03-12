import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h1>#todo</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            All
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/active">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/completed">
            Completed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
