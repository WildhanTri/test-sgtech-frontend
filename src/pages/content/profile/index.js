
import React, { useEffect } from "react";
import ProfileNav from "./profileNav";
import MyLibrary from "./myLibrary";
import EditProfile from "./editProfile";
import { Route, Switch } from "react-router-dom";
import SubscriptionPage from "./subscriptionPage";

const Profile = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="container mt-4" style={styles.container}>
            <ProfileNav></ProfileNav>
            <div style={styles.profileContentWrapper}>
                <Switch>
                    <Route exact path="/profile/my-library">
                        <MyLibrary></MyLibrary>
                    </Route>
                    <Route exact path="/profile/edit-profile">
                        <EditProfile></EditProfile>
                    </Route>
                    <Route exact path="/profile/subscription">
                        <SubscriptionPage></SubscriptionPage>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        height: "100%"
    },
    profileContentWrapper: {
        flex: 1,
        border: "1px solid black",
        height: "100%"
    }
}

export default Profile;