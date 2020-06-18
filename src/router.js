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
import Home from "./routers/Home";
import FoodOrder from "./routers/FoodOrder";
import LoginComponent from "./components/Login";
import UserManagement from "./routers/UserManagement";
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
                <AuthButton />

                <ul>
                    <li>
                        <Link to="/order-online/:id">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/user-manage">Protected Page</Link>
                    </li>
                    <li>
                        <Link to="/login">Protected Page</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/order-online">
                        <FoodOrder />
                    </Route>
                    <PrivateRoute path="/user-manage">
                        <UserManagement />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({location}) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <LoginComponent loginClicked={login}/>
        // <div>
        //     <p>You must log in to view the page at {from.pathname}</p>
        // </div>
    );
}

