import "./App.css";
import About from "./pages/About";
import Game from "./pages/Game";
import History from "./pages/History";
import Home from "./pages/Home";
import Record from "./pages/Record";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/history'>
          <History />
        </Route>
        <Route path='/game'>
          <Game />
        </Route>
        <Route path='/record'>
          <Record />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
