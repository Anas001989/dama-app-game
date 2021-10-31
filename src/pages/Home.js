import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* 
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
      */}
      <li>
        <Link className="home-link" to="/play-with-device">play with device</Link>
      </li>
      <li>
        <Link to="/play-online">Board</Link>
      </li>
      <li>
        <Link to="/two-players">Board</Link>
      </li>
      <li>
        <Link to="/demo">Board</Link>
      </li>
      <li>
        <Link to="/settings">Board</Link>
      </li>
      <li>
        <Link to="/info">Board</Link>
      </li>
    </div>
  );
}

export default Home;
