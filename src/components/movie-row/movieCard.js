
import React, { useEffect, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';

const MovieCard = (props) => {

    useEffect(() => {

    }, [])

    return (
        <div style={styles.container}>
            {props.name}
        </div>
    )
}

const styles = {
    container: {

    }
}

export default MovieCard;