
import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Form, Card, Button, ListGroup } from 'react-bootstrap';

const ProfileNav = () => {

    useEffect(() => {

    }, [])

    return (
        <div style={styles.container}>
            <ListGroup>
                <ListGroup.Item>Edit Profil</ListGroup.Item>
                <ListGroup.Item>My Library</ListGroup.Item>
                <ListGroup.Item>Subscription</ListGroup.Item>
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