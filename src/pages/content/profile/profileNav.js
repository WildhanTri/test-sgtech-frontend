
import React, { useEffect } from "react";
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ProfileNav = () => {

    useEffect(() => {

    }, [])

    return (
        <div style={styles.container}>
            <ListGroup>
                <ListGroup.Item><Link to="/profile/edit-profile">Edit Profil</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/profile/my-library">My Library</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/profile/subscription">Subscription</Link></ListGroup.Item>
                <ListGroup.Item>Log out</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

const styles = {
    container: {
        minWidth:300
    }
}

export default ProfileNav;