
import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Form, Card, Button, Col, Row } from 'react-bootstrap';
import MovieCardBasic from "../../../components/movie-row/movieCardBasic";
import MovieCardPremium from "../../../components/movie-row/movieCardPremium";

import './styles.scss'

const MyLibrary = () => {

  useEffect(() => {

  }, [])

  var dummies = [
    {
      name: "Lorem ipsum dolor",
      year: 2019,
      genre: ["lorem", "upsum"],
      thumbnail: "https://images8.alphacoders.com/100/thumb-1920-1003220.png"
    },
    {
      name: "Lorem ipsum dolor",
      year: 2019,
      genre: ["lorem", "ipsum"],
      thumbnail: "https://p4.wallpaperbetter.com/wallpaper/428/38/497/movies-transformers-transformers-dark-of-the-moon-wallpaper-preview.jpg"
    },
    {
      name: "Lorem ipsum dolor",
      year: 2019,
      genre: ["lorem", "ipsum"],
      thumbnail: "https://wallpapercave.com/wp/wp5276517.jpg"
    },
    {
      name: "Lorem ipsum dolor",
      year: 2019,
      genre: ["lorem", "ipsum"],
      thumbnail: "https://felixmoviethoughts.files.wordpress.com/2016/06/pirates-of-the-caribbean-the-curse-of-the-black-pearl-original2.jpg?w=1200"
    },
    {
      name: "Lorem ipsum dolor",
      year: 2019,
      genre: ["lorem", "ipsum"],
      thumbnail: "https://wallpaperaccess.com/full/2020588.jpg"
    },
    {
      name: "Lorem ipsum dolor",
      year: 2019,
      genre: ["lorem", "ipsum"],
      thumbnail: "https://i.pinimg.com/originals/3f/8d/65/3f8d65d2c3db33b988653006badac121.jpg"
    },
  ]

  return (
    <div className="container" style={styles.container}>
      <h1 className="mb-4">My Library</h1>
      <div className="d-flex flex-wrap sadfg">
        {
          dummies.map((r, index) => {
            return (
              <MovieCardBasic name={r.name} thumbnail={r.thumbnail}></MovieCardBasic>
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
    padding: 48
  },
}

export default MyLibrary;