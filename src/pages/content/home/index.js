
import React, { useEffect, useState } from "react";
import MovieRow from "../../../components/movie-row/movieRow";
import MovieService from "../../../services/MovieService";

const Home = () => {


    const movieService = new MovieService();
    const [stateHomeRow, setStateHomeRow] = useState([])
    const [stateHomeRowLoading, setStateHomeRowLoading] = useState(false)

    useEffect(() => {
        getHomeRow()
    }, [])


    const getHomeRow = () => {
        setStateHomeRowLoading(true)
        movieService.getHomeRow()
            .then((resolve) => {
                setStateHomeRow(resolve.object)
                setStateHomeRowLoading(false)
            })
            .catch((error) => {
                setStateHomeRowLoading(false)
            })
    };


    return (
        <div style={styles.container}>
            {
                stateHomeRowLoading &&
                <div className="spinner-border text-primary ms-2 mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {
                !stateHomeRowLoading && stateHomeRow.map((r, index) => {
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