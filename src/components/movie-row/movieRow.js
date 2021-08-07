
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
            <div style={styles.listMovies}>
                <ul style={styles.listMoviesUl}>
                    {
                        props.rowType === "PREMIUM" && props.data.map((r, index) => {
                            return (
                                <MovieCard name={r.name} thumbnail={r.thumbnail}></MovieCard>
                            )
                        })
                    }

                    {
                        props.rowType === "BASIC" && props.data.map((r, index) => {
                            return (
                                <MovieCard name={r.name} thumbnail={r.thumbnail}></MovieCard>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

const styles = {
    container: {
        marginTop: 0,
        padding: "4px 36px",
        textAlign: 'left'
    },
    listMovies: {
        overflow: 'auto',
        scrollBehavior: 'smooth'
    },
    listMoviesUl: {
        display:'flex',
        flexDirection:'row',
        paddingLeft:0,
        paddingRight:0,
        marginBottom:0
    }
}

export default MovieRow;