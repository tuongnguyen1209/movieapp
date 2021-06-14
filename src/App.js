import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllMovie from "./components/AllMovie";
import Header from "./components/Header/Header";
import MyFooter from "./components/Footer/MyFooter";
import Home from "./components/Home";
import Product from "./components/Product";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/phim/:_id">
              <Product />
            </Route>

            <Route path="/allmovie">
              <AllMovie />
            </Route>
          </Switch>
          <MyFooter />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
