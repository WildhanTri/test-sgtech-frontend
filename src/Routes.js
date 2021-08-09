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
import Profile from "./pages/content/profile";
import MyLibrary from "./pages/content/profile/myLibrary";
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
                    <Route exact path="/movies">
                        <Home />
                    </Route>
                    <Route exact path="/series">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};

export default Routes;