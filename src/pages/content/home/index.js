
import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';
import { data } from './data'
import MovieRow from "../../../components/movie-row/movieRow";

const Home = () => {

    useEffect(() => {

    }, [])

    return (
        <div style={styles.container}>
            {
                data.map((r, index) => {
                    return (
                        <MovieRow name={r.name} data={r.data} rowType={r.rowType}></MovieRow>
                    )
                })
            }
        </div>
    )
}

const styles = {
    container: {
        marginTop:48
    }
}

export default Home;