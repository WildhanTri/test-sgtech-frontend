
import React, { useEffect, useState } from "react";
import MovieRow from "../../../components/movie-row/movieRow";
import MovieService from "../../../services/MovieService";

const MovieDetail = () => {

    const movieService = new MovieService();

    useEffect(() => {

    }, [])


    return (
        <div style={styles.container}>
            This is movie detail
        </div>
    )
}

const styles = {
    container: {
    }
}

export default MovieDetail;