
import React, { useEffect, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';
import MovieCard from "./movieCard";

const MovieRow = (props) => {

    useEffect(() => {

    }, [])

    return (
        <div style={styles.container}>
            {props.name}{' '}{props.rowType}
            {
                props.data.map((r, index) => {
                    return (
                        <MovieCard name={r.name}></MovieCard>
                    )
                })
            }
        </div>
    )
}

const styles = {
    container: {

    }
}

export default MovieRow;