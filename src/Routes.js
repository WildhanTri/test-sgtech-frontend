import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./shared/header";
import Sidebar from "./shared/sidebar";

const Routes = () => {

    return (
        <Router>
            <Header></Header>
            {/* <Sidebar></Sidebar> */}
            <div>
                <Switch>
                    <Route exact path="/"
                        render={() => {
                            return (
                                <div></div>
                            )
                        }}
                    />
                </Switch>
            </div>
        </Router>
    )
};

export default Routes;