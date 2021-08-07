
import React, { useEffect, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';
import MovieCardBasic from "./movieCardBasic";
import MovieCardPremium from "./movieCardPremium";

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
                                <MovieCardPremium name={r.name} thumbnail={r.thumbnail}></MovieCardPremium>
                            )
                        })
                    }

                    {
                        props.rowType === "BASIC" && props.data.map((r, index) => {
                            return (
                                <MovieCardBasic name={r.name} thumbnail={r.thumbnail}></MovieCardBasic>
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