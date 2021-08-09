
import React, { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MovieService from "../../services/MovieService";
import MovieCardBasic from "./movieCardBasic";
import MovieCardPremium from "./movieCardPremium";

const MovieRow = (props) => {

  const [stateMovies, setStateMovies] = useState([])

  const movieService = new MovieService();

  useEffect(() => {
    console.log(props)
    getHomeRowDetail(props.uuid)
  }, [])

  const getHomeRowDetail = (home_row_uuid) => {
    movieService.getHomeRowMovies(home_row_uuid)
      .then((resolve) => {
        console.log(home_row_uuid)
        console.log(resolve)
        setStateMovies(resolve.object)
      })
      .catch((error) => {

      })
  }

  return (
    <div style={styles.container}>
      {
        props.rowType === "BANNER" &&
        <div>
          <Carousel>

            {
              stateMovies != null &&
              stateMovies.map((r, index) => {
                return (
                  <Carousel.Item interval={3000}>
                    <img
                      className="d-block w-100"
                      style={{ height: 600, objectFit: 'cover' }}
                      src={r.movie_thumbnail_horizontal_url}
                      alt={r.movie_title}
                    />
                    <Carousel.Caption>
                      <h3>{r.movie_title}</h3>
                      <p>{r.movie_synopsis}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }

          </Carousel>
        </div>
      }

      {
        props.rowType !== "BANNER" &&
        <div style={styles.rowMovies}>
          <h3>
            {props.name}
          </h3>
          <div style={styles.listMovies}>
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
                    <MovieCardBasic name={r.movie_title} thumbnail={r.movie_thumbnail_vertical_url}></MovieCardBasic>
                  )
                })
              }
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

const styles = {
  container: {
    marginTop: 0,
    padding: "4px 0px",
    textAlign: 'left'
  },
  rowMovies: {
    padding: "4px 36px",
  },
  listMovies: {
    overflow: 'auto',
    scrollBehavior: 'smooth'
  },
  listMoviesUl: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 0
  }
}

export default MovieRow;