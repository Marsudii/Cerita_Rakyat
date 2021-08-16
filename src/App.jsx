import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import KumpulanCerita from "./components/KumpulanCerita";
import Works from "./components/Works";
import RawaPening from "./components/RawaPening";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.css";
import JakaTarub from "./components/JakaTarub";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/KumpulanCerita" component={KumpulanCerita} />
          <Route exact path="/RawaPening" component={RawaPening} />
          <Route exact path="/JakaTarub" component={JakaTarub} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
