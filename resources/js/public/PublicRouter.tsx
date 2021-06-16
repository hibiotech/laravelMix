import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";

interface Props {}

export const PublicRouter = (props: Props) => {
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
                        <div>
                            <h1>HOME of Public</h1>
                        </div>
                    </Route>
                    <Route path="/about">
                        <div>
                            <h1>ABOUT Public</h1>
                            <p>
                                Should always be a public page, like seo pages
                                and more
                            </p>
                        </div>
                    </Route>

                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
