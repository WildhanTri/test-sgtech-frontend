
import React, { useContext, useEffect } from "react";
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from "../../../stores/userProvider";

const ProfileNav = () => {

    const { user } = useContext(UserContext)
    const [stateUser, setStateUser] = user

    useEffect(() => {

    }, [])


    const logOut = (e) => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setStateUser(null)
        document.location.href = "/";
    }

    return (
        <div style={styles.container}>
            <ListGroup>
                <Link to="/profile/edit-profile" style={{ color: "white", textDecoration: 'none' }}>
                    <ListGroup.Item style={styles.listItem}>Edit Profil</ListGroup.Item></Link>
                <Link to="/profile/my-library" style={{ color: "white", textDecoration: 'none' }}><ListGroup.Item style={styles.listItem}>My Library</ListGroup.Item></Link>
                <Link to="/profile/subscription" style={{ color: "white", textDecoration: 'none' }}><ListGroup.Item style={styles.listItem}>Subscription</ListGroup.Item></Link>
                <ListGroup.Item style={styles.listItem} onClick={() => { logOut() }}>Log out</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

const styles = {
    container: {
        minWidth: 300,
        paddingTop: 40,
        background: "#1B1B1B",
    },
    listItem: {
        background: "#252525",
        color: 'white',
        fontWeight: 'bold',
        padding: '16px 36px',
        fontSize: '18px',
        letterSpacing: '2px',
        cursor:'pointer'
    }
}

export default ProfileNav;