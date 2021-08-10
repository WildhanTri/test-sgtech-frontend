
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieRow from "../../../components/movie-row/movieRow";
import MovieService from "../../../services/MovieService";
import { Button, Nav, Form } from 'react-bootstrap';
import { currencyFormat, useQuery } from "../../../utils/util";

import './styles.scss'
import { UserContext } from "../../../stores/userProvider";

const Movies = (props) => {

  const [stateMovies, setStateMovies] = useState([])
  const [stateMoviesLoading, setStateMoviesLoading] = useState(false)
  const [stateMoviesMoreLoading, setStateMoviesMoreLoading] = useState(false)
  const [didMoviesMoreloading, setDidMoviesMoreLoading] = useState(false)
  const movieService = new MovieService();

  const [query, setQuery] = useState(props.searchQuery)
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(5)

  const [rowCount, setRowCount] = useState(0)

  useEffect(() => {
    if (didMoviesMoreloading) {
      movieService.getMovie(props.searchQuery, page, offset)
        .then((resolve) => {
          setStateMovies(resolve.object)
          setStateMoviesMoreLoading(false)
        })
      setDidMoviesMoreLoading(false)
    } else {
      getMovies()
    }
  }, [props.searchQuery, offset]);

  const getMovies = () => {
    setStateMoviesLoading(true)
    movieService.getMovie(props.searchQuery, page, offset)
      .then((resolve) => {
        setRowCount(resolve.row_count > 50 ? 50 : resolve.row_count)
        setStateMovies(resolve.object)
        setStateMoviesLoading(false)
      })
  }

  const loadMore = (e) => {
      setOffset(offset + 5)
      setStateMoviesMoreLoading(true)
      setDidMoviesMoreLoading(true)
  }

  return (
    <div style={styles.container} className="container text-start mt-4">
      {
        props.searchQuery != null && props.searchQuery != "" &&
        <h6 style={{ color: 'white' }} className="mb-4">Hasil pencarian <b>{props.searchQuery}</b></h6>
      }
      {
        stateMoviesLoading &&
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
      {
        !stateMoviesLoading && stateMovies.length == 0 &&
        <h6 style={{ color: 'white' }} className="text-center">Tidak ditemukan</h6>
      }
      {
        !stateMoviesLoading && stateMovies.map((movie, index) => {
          return (
            <div className="card mb-1" style={{ background: "#1c1c1c", color: '#cecece' }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-sm-4">
                    <img className="w-100" style={{ height: 280, objectFit: 'cover' }} src={movie.movie_thumbnail_vertical_url} alt={movie.movie_title}></img>
                  </div>
                  <div className="col-lg-10 col-md-9 col-sm-8">
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

      {
        rowCount > stateMovies.length &&
        <div>
          {
            !stateMoviesLoading &&
            <div className="card mb-1" style={{ background: "#1c1c1c", color: '#cecece' }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <button className="btn w-100 p-4" disabled={stateMoviesMoreLoading} style={styles.btnMore} onClick={(e) => { loadMore(e) }}>

                      {
                        !stateMoviesMoreLoading &&
                        <span>Muat lebih banyak</span>
                      }
                      {
                        stateMoviesMoreLoading &&

                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
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
  },
  btnMore: {
    border: '4px solid grey',
    color: 'white'
  }
}

export default Movies;