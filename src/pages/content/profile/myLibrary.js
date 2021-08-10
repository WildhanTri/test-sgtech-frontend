
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCardBasic from "../../../components/movie-row/movieCardBasic";
import UserService from "../../../services/UserService";

import './styles.scss'

const MyLibrary = () => {

  const [stateMovies, setStateMovies] = useState([])
  const [stateMoviesLoading, setStateMoviesLoading] = useState(false)

  useEffect(() => {
    getMyLibrary()
  }, [])

  const userService = new UserService()
  const getMyLibrary = () => {
    setStateMoviesLoading(true)
    userService.getMyLibrary()
      .then((resolve) => {
        setStateMovies(resolve.object)
        setStateMoviesLoading(false)
      })
  }

  return (
    <div className="container" style={styles.container}>
      <h1 className="mb-4">My Library</h1>
      <div className="d-flex flex-wrap">

        {
          stateMoviesLoading &&
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        {
          !stateMoviesLoading && stateMovies.map((r, index) => {
            return (
              <Link to={"/movies/" + r.movie_uuid}>
                <MovieCardBasic name={r.movie_name} thumbnail={r.movie_thumbnail_vertical_url}></MovieCardBasic>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'left',
    padding: 48,
    background: 'white'
  },
}

export default MyLibrary;