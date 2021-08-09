
import React, { useEffect } from "react";
import MovieCardBasic from "../../../components/movie-row/movieCardBasic";
import './styles.scss'

const SubscriptionPage = () => {

  useEffect(() => {

  }, [])

  return (
    <div className="container" style={styles.container}>
        Subscription Page
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'left',
    padding: 48
  },
}

export default SubscriptionPage;