import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

interface Props {}

export const AppRouter = (props: Props) => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dash">App dashboard</Link>
                        </li>
                        <li>
                            <Link to="/about">App About</Link>
                        </li>
                        <li>
                            {/* Navigate between apps */}
                            <a href="/">Public Home</a>
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
                    <Route path="/about">
                        {/* <About /> */}
                        <div>
                            <h1>ABOUT app</h1>
                            <p>Maye need auth, but should be a web tool</p>
                        </div>
                    </Route>
                    <Route path="/dash">
                        {/* <Home /> */}
                        <div>
                            <h1>Dashboard of app</h1>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
