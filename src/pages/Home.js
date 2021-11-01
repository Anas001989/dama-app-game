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
      <div>
        <Link to="/play-with-device">play with device</Link>
      </div>
      <div>
        <Link to="/play-online">Board</Link>
      </div>
      <div>
        <Link to="/two-players">Board</Link>
      </div>
      <div>
        <Link to="/demo">Board</Link>
      </div>
      <div>
        <Link to="/settings">Board</Link>
      </div>
      <div>
        <Link to="/info">Board</Link>
      </div>
    </div>
  );
}

export default Home;
