
import React, { useEffect, useState } from "react";
import { Form, Card, Button, Carousel } from 'react-bootstrap';
import MovieCardBanner from "./movieCardBanner";
import MovieCardBasic from "./movieCardBasic";
import MovieCardPremium from "./movieCardPremium";

const MovieRow = (props) => {

  useEffect(() => {

  }, [])

  return (
    <div style={styles.container}>
      {
        props.rowType === "BANNER" &&
        <div>
          <Carousel>

            {
              props.data.map((r, index) => {
                return (
                  <Carousel.Item interval={3000}>
                    <img
                      className="d-block w-100"
                      style={{height:600, objectFit:'cover'}}
                      src={r.thumbnail}
                      alt={r.name}
                    />
                    <Carousel.Caption>
                      <h3>{r.name}</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                props.rowType === "PREMIUM" && props.data.map((r, index) => {
                  return (
                    <MovieCardPremium name={r.name} thumbnail={r.thumbnail}></MovieCardPremium>
                  )
                })
              }

              {
                props.rowType === "BASIC" && props.data.map((r, index) => {
                  return (
                    <MovieCardBasic name={r.name} thumbnail={r.thumbnail}></MovieCardBasic>
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