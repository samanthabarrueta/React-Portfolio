import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

const App = () => {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/React-Portfolio" component={Home} />
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>
  );
  
}

export default App;
