import React, { Suspense } from 'react';
import OrderFood from "./feature/OrderFood";
import UserManagement from "./feature/UserManagement/UserManagement";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import LoginComponent from "./components/Login";

export default function App() {
    return (
        <div>
           <Suspense fallback={<div>Loading ...</div>}>
               <BrowserRouter>
                   <Switch>
                       <Redirect exact from="/" to="/order-online" />
                       <Route path="/order-online" component={OrderFood} />
                       <Route exact path="/login" component={LoginPage} />
                       <PrivateRoute exact path="/user-manage" component={UserManagement}/>
                   </Switch>
               </BrowserRouter>
           </Suspense>
        </div>
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

// "start": "webpack-dev-server --open",
// "webpack-dev-server --mode development",
//
// SKIP_PREFLIGHT_CHECK=true