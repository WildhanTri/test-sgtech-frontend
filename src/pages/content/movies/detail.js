
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieRow from "../../../components/movie-row/movieRow";
import MovieService from "../../../services/MovieService";
import { Button, Nav, Form, Modal } from 'react-bootstrap';
import { currencyFormat } from "../../../utils/util";

const MovieDetail = () => {

  const movieService = new MovieService();
  const [stateMovie, setStateMovie] = useState({})
  const [stateMovieBuyLoading, setMovieBuyLoading] = useState(false)

  // const [state, setStateMovie] = useState({})

  let { movie_uuid } = useParams();

  const [show, setShow] = useState(false);

  const [watchMovieShow, setWatchMovieShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleWatchMovieShow = () => setWatchMovieShow(true);
  const handleWatchMovieClose = () => setWatchMovieShow(false);

  useEffect(() => {
    getMovieDetail(movie_uuid)
  }, [])

  const getMovieDetail = (movie_uuid) => {
    movieService.getMovieDetail(movie_uuid)
      .then((resolve) => {
        setStateMovie(resolve.object)
        console.log(stateMovie)
      })
      .catch((error) => {

      })
  }

  const buyMovieProceed = () => {
    setMovieBuyLoading(true)
    setTimeout(() => {
      movieService.buyMovie(stateMovie.movie_uuid)
        .then((resolve) => {
          setStateMovie({ ...stateMovie, movie_is_bought: 1 })
          setMovieBuyLoading(false)
          handleClose()
        })
        .catch((err) => {
          alert(err)
          setMovieBuyLoading(false)
          handleClose()
        })
    }, 2000)
  }



  return (
    <div style={styles.container} className="container mt-4">
      <div className="row">
        <div className="col-sm-4 text-center">
          <img src={stateMovie.movie_thumbnail_vertical_url} alt={stateMovie.movie_title} className="w-100"></img>
        </div>
        <div className="col-sm-8 text-start" style={styles.movieContent}>
          <div className="mb-4" style={styles.movieHeader}>
            <div style={styles.movieTitleWrapper}>
              <h2 style={styles.movieTitle}>{stateMovie.movie_title}</h2>
              <h6 style={styles.movieYear}>{stateMovie.movie_year}</h6>
            </div>
            <div style={styles.movieClassificationWrapper}>
              <div style={styles.movieClassificationContentWrapper}>
                {stateMovie.movie_classification_name}
              </div>
            </div>
          </div>
          <div className="mb-4" style={styles.movieDescriptionWrapper}>
            <p className="mb-4">
              {stateMovie.movie_synopsis}
            </p>
            <div className="text-end btn-">
              {
                stateMovie.movie_is_bought === 1 &&
                <Button variant="primary" onClick={handleWatchMovieShow}>Tonton</Button>
              }
              {
                stateMovie.movie_is_bought === 0 &&
                <Button variant="primary" onClick={handleShow}>Beli {currencyFormat(stateMovie.movie_price)}</Button>
              }
            </div>
          </div>
          <div className="mb-4" style={styles.movieDescriptionWrapper}>
            <h3 className="mb-4">
              <b>Trailer</b>
            </h3>
            <div className="text-start">
              <iframe title={stateMovie.movie_title} className="w-100" height="480" src={stateMovie.movie_trailer_url} allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi pembelian</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Anda akan membeli film <b>{stateMovie.movie_title}</b> dengan harga <b>{currencyFormat(stateMovie.movie_price)}</b>

        </Modal.Body>
        <Modal.Footer>

          {stateMovieBuyLoading &&
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
          {
            !stateMovieBuyLoading &&
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
          }
          <Button variant="primary" onClick={buyMovieProceed} disabled={stateMovieBuyLoading}>
            Beli
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={watchMovieShow} onHide={handleWatchMovieClose} backdrop="static" dialogClassName="watch-movie-wrapper">
        <Modal.Header closeButton>
          <Modal.Title>{stateMovie.movie_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe title={stateMovie.movie_title + '?autoplay=1'} className="w-100" height="480" src={stateMovie.movie_trailer_url} allowFullScreen>
          </iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

const styles = {
  container: {
    background: "#1C1C1C",
    color: "white",
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
    border: "4px solid white",
    color: "white",
    padding: "4px 8px",
    fontSize: 36,
    fontWeight: 'bold',
    borderRadius: 4,
    marginBottom: 16
  },
  movieTitle: {
    fontWeight: "bold"
  },
  movieYear: {
    color: 'grey'
  }
}

export default MovieDetail;