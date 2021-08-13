import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import { LinkItem } from "./GlobalNavbar";

// should come from some where else...
export const links: LinkItem[] = [
    { name: "Home", to: "/", direct: false },
    { name: "About", to: "/about", direct: false },

    { name: "Demo Page", to: "/demo/page1", direct: true },
];

export const AppRouter = () => {
    return (
        <Router basename="/">
            {/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
