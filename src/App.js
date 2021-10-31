import { Route, Switch, Link } from "react-router-dom";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
       <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/play-with-device">
          <Settings />
        </Route>
        <Route path="/play-online">
          <Settings />
        </Route>
        <Route path="/two-players">
          <Settings />
        </Route>
        <Route path="/demo">
          <Settings />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/info">
          <Settings />
        </Route>
        <Route path="/board">
          <Board />
        </Route>

        {/*
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
       <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/board">Board</Link>
       </li> 
      </ul>
        */}
{/*
      <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
      </Switch>
</Layout> */}
    </div>
  );
}

export default App;
