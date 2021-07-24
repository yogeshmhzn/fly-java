import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

import {Switch, Route, Redirect } from "react-router-dom"

const App = () => {
  return (
   <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/"  />

      
    </Switch>
      <div className="bgimg">
        
      </div>
   </>
  );
};

export default App;
