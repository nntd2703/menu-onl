import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    Redirect
} from "react-router-dom";
import Home from "./feature/Home/Home";
import Index from "./feature/FoodOrder";
import LoginComponent from "./components/Login";
import UserManagement from "./feature/UserManagement/UserManagement";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function SetupRouter() {
    return (
        <Router>
            <div>
                {/*<AuthButton />*/}

                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <Link to="/">Public Page</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/">Public Page</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/">Public Page</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/">Public Page</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/">Public Page</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/login">Login Page</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/user-manage">Protected Page</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/order-online">
                        <Index />
                    </Route>
                    <PrivateRoute exact path="/user-manage">
                        <UserManagement />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}
