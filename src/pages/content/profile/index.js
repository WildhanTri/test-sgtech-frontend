
import React, { useEffect } from "react";
import ProfileNav from "./profileNav";
import MyLibrary from "./myLibrary";

const Profile = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="container" style={styles.container}>
            <ProfileNav></ProfileNav>
            <div style={styles.profileContentWrapper}>
                {/* <EditProfile></EditProfile> */}
                <MyLibrary></MyLibrary>
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