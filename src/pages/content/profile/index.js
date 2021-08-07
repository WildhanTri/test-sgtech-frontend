
import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';
import ProfileNav from "./profileNav";
import EditProfile from "./editProfile";

const Profile = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="container" style={styles.container}>
            <ProfileNav></ProfileNav>
            <div style={styles.profileContentWrapper}>
                <EditProfile></EditProfile>
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