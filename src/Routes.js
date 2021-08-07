import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./pages/auth/login";
import Header from "./shared/header";

const Routes = () => {

    const [stateUser, setStateUser] = useState(false)

    return (
        <Router>
            {
                stateUser && <Header></Header>
            }
            <div>
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
                </Switch>
            </div>
        </Router>
    )
};

export default Routes;