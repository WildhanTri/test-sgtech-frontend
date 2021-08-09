
import React, { useEffect } from "react";
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ProfileNav = () => {

    useEffect(() => {

    }, [])

    return (
        <div style={styles.container}>
            <ListGroup>
                <Link to="/profile/edit-profile" style={{ color: "white", textDecoration: 'none' }}>
                    <ListGroup.Item style={styles.listItem}>Edit Profil</ListGroup.Item></Link>
                <Link to="/profile/my-library" style={{ color: "white", textDecoration: 'none' }}><ListGroup.Item style={styles.listItem}>My Library</ListGroup.Item></Link>
                <Link to="/profile/subscription" style={{ color: "white", textDecoration: 'none' }}><ListGroup.Item style={styles.listItem}>Subscription</ListGroup.Item></Link>
                <ListGroup.Item style={styles.listItem}>Log out</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

const styles = {
    container: {
        minWidth: 300,
        paddingTop: 100,
        background: "#1B1B1B"
    },
    listItem: {
        background: "#252525",
        color: 'white',
        fontWeight: 'bold'
    }
}

export default ProfileNav;