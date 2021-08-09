
import React, { useEffect, useState } from "react";
import MovieRow from "../../../components/movie-row/movieRow";
import MovieService from "../../../services/MovieService";

const Home = () => {


    const movieService = new MovieService();
    const [stateHomeRow, setStateHomeRow] = useState([])

    useEffect(() => {
        getHomeRow()
    }, [])


    const getHomeRow = () => {
        movieService.getHomeRow()
            .then((resolve) => {
                setStateHomeRow(resolve.object)
            })
            .catch((error) => {

            })
    };


    return (
        <div style={styles.container}>
            {
                stateHomeRow.map((r, index) => {
                    return (
                        <MovieRow key={index} uuid={r.home_row_uuid} name={r.home_row_name} data={r.data} rowType={r.home_row_type}></MovieRow>
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

export default Home;