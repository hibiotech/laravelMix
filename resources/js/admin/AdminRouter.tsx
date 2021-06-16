import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

interface Props {}

export const AdminRouter = (props: Props) => {
    return (
        <Router basename="/admin">
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Admin Home</Link>
                        </li>
                        <li>
                            <Link to="/about">Admin About</Link>
                        </li>
                        <li>
                            {/* Navigate between apps */}
                            <a href="/">Public Home</a>
                        </li>
                        <li>
                            <a href="/dash">App dashboard</a>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        {/* <About /> */}
                        <div>
                            <h1>ABOUT admin</h1>
                            <p>Only admins here plz...</p>
                        </div>
                    </Route>
                    <Route path="/">
                        {/* <Home /> */}
                        <div>
                            <h1>ADMIN home</h1>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
