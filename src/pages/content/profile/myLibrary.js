
import React, { useEffect, useState } from "react";
import MovieCardBasic from "../../../components/movie-row/movieCardBasic";
import UserService from "../../../services/UserService";

import './styles.scss'

const MyLibrary = () => {

  const [stateMovies, setStateMovies] = useState([])

  useEffect(() => {
    getMyLibrary()
  }, [])

  const userService = new UserService()
  const getMyLibrary = () => {
    userService.getMyLibrary()
      .then((resolve) => {
        setStateMovies(resolve.object)
      })
  }

  return (
    <div className="container" style={styles.container}>
      <h1 className="mb-4">My Library</h1>
      <div className="d-flex flex-wrap">
        {
          stateMovies.map((r, index) => {
            return (
              <MovieCardBasic name={r.movie_name} thumbnail={r.movie_thumbnail_vertical_url}></MovieCardBasic>
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
    background:'white'
  },
}

export default MyLibrary;