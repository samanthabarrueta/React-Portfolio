import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/React-Portfolio" component={Home} />
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>
  );
  
}

export default App;
