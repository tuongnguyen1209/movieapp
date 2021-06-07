import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllMovie from "./components/AllMovie";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/phim/:namemovie">
            <Product />
          </Route>

          <Route path="/:link1/:link2?">
            <AllMovie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
