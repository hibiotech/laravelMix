import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

interface Props { }

export const HomeRouter = (props: Props) => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Public Home</Link>
                        </li>
                        <li>
                            <Link to="/about">Public About</Link>
                        </li>
                        <li>
                            <a href="/dash">App Dashboard</a>
                        </li>
                        <li>
                            {/* Navigate between apps */}
                            <a href="/admin">Admin Home</a>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>

                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
