import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

class Container extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "Projects") {
            return <Projects />;
        };
    };

    render() {
        return (
            <div className="container">
                <Router>
                    <Navbar />
                    <Route exact path="/React-Portfolio" component={Home} />
                    <Route path="/Projects" component={Projects} />      
                </Router>
            
            
                <Navbar
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                
                {this.renderPage()}
            </div>
        );
    };
};

export default Container;
