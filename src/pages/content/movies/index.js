
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieRow from "../../../components/movie-row/movieRow";
import MovieService from "../../../services/MovieService";
import { Button, Nav, Form } from 'react-bootstrap';
import { currencyFormat } from "../../../utils/util";

import './styles.scss'

const Movies = () => {

  const [stateMovies, setStateMovies] = useState([])
  const movieService = new MovieService();

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    movieService.getMovie()
      .then((resolve) => {
        setStateMovies(resolve.object)

        console.log(stateMovies)
        console.log(resolve)
        console.log(stateMovies)
      })
  }


  return (
    <div style={styles.container} className="container mt-4">
      {
        stateMovies.map((movie, index) => {
          return (
            <div className="card mb-1" style={{ background: "#1c1c1c", color:'#cecece' }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <img className="w-100" style={{ height: 280, objectFit: 'cover' }} src={movie.movie_thumbnail_vertical_url} alt={movie.movie_title}></img>
                  </div>
                  <div className="col-sm-9">
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="w-100 text-start flex-grow-1">
                        <h2>{movie.movie_title}</h2>
                        {movie.movie_synopsis}
                      </div>
                      <div className="w-100 text-end">
                        <Link to={"/movies/" + movie.movie_uuid}>
                          <button className="btn btn-primary me-2">Detail</button>
                        </Link>
                        {/* <button className="btn btn-primary">Beli { currencyFormat(movie.movie_price) }</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const styles = {
  container: {
    marginTop: 64
  },
  movieContent: {
    padding: '24px 36px'
  },
  movieHeader: {
    display: 'flex',
    borderBottom: "1px solid #cccccc"
  },
  movieTitleWrapper: {
    flex: 1
  },
  movieClassificationWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  movieClassificationContentWrapper: {
    border: "4px solid black",
    padding: "4px 2px",
    fontSize: 36,
    fontWeight: 'bold',
    borderRadius: 4,
    marginBottom: 16
  },
  movieTitle: {

  },
  movieYear: {
    color: 'grey'
  }
}

export default Movies;