import React, { useContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/content/home";
import MovieDetail from "./pages/content/movies/detail";
import Profile from "./pages/content/profile";
import Header from "./shared/header";
import { UserContext } from "./stores/userProvider";

const Routes = () => {

    const { user } = useContext(UserContext)
    const [stateUser, setStateUser] = useState(user)

    return (
        <Router>
            <Header></Header>
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
                    <Route exact path="/movies/:movie_uuid">
                        <MovieDetail />
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