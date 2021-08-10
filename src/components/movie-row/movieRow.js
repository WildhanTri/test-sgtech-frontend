
import React, { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MovieService from "../../services/MovieService";
import MovieCardBasic from "./movieCardBasic";
import MovieCardPremium from "./movieCardPremium";

const MovieRow = (props) => {

  const [stateMovies, setStateMovies] = useState([])
  const [stateMoviesLoading, setStateMoviesLoading] = useState(false)

  const movieService = new MovieService();

  useEffect(() => {
    getHomeRowDetail(props.uuid)
  }, [])

  const getHomeRowDetail = (home_row_uuid) => {
    setStateMoviesLoading(true)
    movieService.getHomeRowMovies(home_row_uuid)
      .then((resolve) => {
        setStateMovies(resolve.object)
        setStateMoviesLoading(false)
      })
      .catch((error) => {
        setStateMoviesLoading(false)
      })
  }

  return (
    <div style={styles.container}>
      {
        props.rowType === "BANNER" &&
        <div style={{ height: 600 }}>
          {
            stateMoviesLoading &&
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
          {
            !stateMoviesLoading &&
            <Carousel>
              {
                stateMovies != null &&
                stateMovies.map((r, index) => {
                  return (
                    <Carousel.Item interval={2000} style={{ paddingBottom: 100 }}>
                      <div style={styles.carouselBoxShadow}></div>
                      <Link to={"/movies/" + r.movie_uuid}>
                        <img
                          className="d-block w-100"
                          style={{ height: 500, objectFit: 'cover' }}
                          src={r.movie_thumbnail_horizontal_url}
                          alt={r.movie_title}
                        />
                      </Link>
                      <Carousel.Caption>
                        <h3>{r.movie_title}</h3>
                        <p>{r.movie_synopsis}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                })
              }

            </Carousel>
          }

        </div>
      }

      {
        props.rowType !== "BANNER" &&
        <div style={styles.rowMovies}>
          <h4 style={{ color: 'white', fontWeight: 'bold' }}>
            {props.name}
          </h4>

          <div className="scrollbar" style={styles.listMoviesPremium}>
            {
              stateMoviesLoading &&
              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            {
              !stateMoviesLoading &&
              <ul style={styles.listMoviesUl}>
                {
                  stateMovies != null &&
                  props.rowType === "PREMIUM" && stateMovies.map((r, index) => {
                    return (
                      <Link to={"movies/" + r.movie_uuid}>
                        <MovieCardPremium name={r.movie_title} thumbnail={r.movie_thumbnail_horizontal_url}></MovieCardPremium>
                      </Link>
                    )
                  })
                }

                {
                  stateMovies != null &&
                  props.rowType === "BASIC" && stateMovies.map((r, index) => {
                    return (
                      <Link to={"movies/" + r.movie_uuid}>
                        <MovieCardBasic name={r.movie_title} thumbnail={r.movie_thumbnail_vertical_url}></MovieCardBasic>
                      </Link>
                    )
                  })
                }
              </ul>

            }
          </div>

        </div>
      }
    </div>
  )
}

const styles = {
  container: {
    marginTop: 0,
    marginBottom: 12,
    padding: "4px 0px",
    textAlign: 'left'
  },
  rowMovies: {
    padding: "4px 36px",
  },
  listMoviesPremium: {
    overflow: 'auto',
    scrollBehavior: 'smooth',
    height: 200
  },
  listMoviesBasic: {
    overflow: 'auto',
    scrollBehavior: 'smooth'
  },
  listMoviesUl: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 0
  },
  carouselBoxShadow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    boxShadow: 'inset 0px -170px 20px 0px black',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  }
}

export default MovieRow;