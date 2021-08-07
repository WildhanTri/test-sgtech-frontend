import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/content/home";
import Header from "./shared/header";

const Routes = () => {

    const [stateUser, setStateUser] = useState(true)

    return (
        <Router>
            {
                stateUser && <Header></Header>
            }
            <div style={{ paddingTop: 64 }}>
                <Switch>
                    <Route exact path="/"
                        render={() => {
                            return (
                                !stateUser ? <Redirect to="/login" /> : null
                            )
                        }}
                    />

                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};

export default Routes;