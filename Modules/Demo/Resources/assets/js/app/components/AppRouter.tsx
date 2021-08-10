import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {
    GlobalNavbar,
    LinkItem,
} from "../../../../../../../resources/js/components/GlobalNavbar";

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

// should come from some where else...
const links: LinkItem[] = [
    { name: "Home", to: "/", direct: true },
    { name: "Demo Page1", to: "/page1", direct: false },
    { name: "Demo Page2", to: "/page2", direct: false },
];

export const AppRouter = () => {
    return (
        <Router basename="/demo">
            <div>
                <GlobalNavbar links={links}></GlobalNavbar>

                {/* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/page1">
                        <Page1></Page1>
                    </Route>
                    <Route path="/page2">
                        <Page2></Page2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;