import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Active from "./components/Active";
import All from "./components/All";
import Completed from "./components/Completed";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Nav />
          <Switch>
            <Route path="/active" component={Active} />
            <Route path="/completed" component={Completed} />
            <Route path="/" component={All} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
