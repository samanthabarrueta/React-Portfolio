import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
    </Router>
  );
  
}

export default App;
