import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/content/home";
import Movies from "./pages/content/movies";
import MovieDetail from "./pages/content/movies/detail";
import Profile from "./pages/content/profile";
import Header from "./shared/header";
import { UserContext } from "./stores/userProvider";
import ScrollToTop from "./utils/scrollToTop";

const Routes = () => {

  const { user } = useContext(UserContext)
  const [stateUser, setStateUser] = user

  const [searchQuery, setSearchQuery] = useState("")

  const searchFilm = (q) => {
    setSearchQuery(q)
  }

  return (
    <Router>
      <Header searchFilm={(q) => { searchFilm(q) }}></Header>
      <div style={{ paddingTop: 64 }}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                stateUser == null ? <Redirect to="/login" /> : <Redirect to="/home" />
              )
            }}
          />

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies searchQuery={searchQuery} />
          </Route>
          <Route exact path="/movies/:movie_uuid">
            <MovieDetail />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

      </div>
    </Router>
  )
};

export default Routes;