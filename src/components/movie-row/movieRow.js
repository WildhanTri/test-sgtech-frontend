
import React, { useEffect, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';
import MovieCard from "./movieCard";

const MovieRow = (props) => {

    useEffect(() => {

    }, [])

    return (
        <div style={styles.container}>
            <h3>
                {props.name}
            </h3>
            {
                props.rowType === "PREMIUM" && props.data.map((r, index) => {
                    return (
                        <MovieCard name={r.name}></MovieCard>
                    )
                })
            }

            {
                props.rowType === "BASIC" && props.data.map((r, index) => {
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
        marginTop: 8,
        padding:"12px 36px",
        textAlign: 'left'
    }
}

export default MovieRow;