import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";
import AllMovie from "./components/AllMovie";
import Header from "./components/Header/Header";
import MyFooter from "./components/Footer/MyFooter";
import Home from "./components/Home";
import Product from "./components/Product";
import UserProvider from "./contexts/UserContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <UserProvider>
          <Header />
          <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
