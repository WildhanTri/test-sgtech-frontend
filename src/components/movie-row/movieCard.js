
import React, { useEffect, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';

const MovieCard = (props) => {

    useEffect(() => {

    }, [])

    return (
        <li style={styles.container}>
            <img style={styles.thumbnail} src={props.thumbnail} alt={props.name} />
        </li>
    )
}

const styles = {
    container: {
        position: 'relative',
        display: 'block',
        flex: 'none',
        marginRight: 10,
        width: 320,
        height: 180,
        borderRadius: '20px'
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px'
    }
}

export default MovieCard;