
import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import './styles.scss'

const SubscriptionPage = () => {

  useEffect(() => {

  }, [])

  return (
    <div className="container" style={styles.container}>
      <h1 className="mb-4">Subscription</h1>

      <div className="text-start">
        <p>
          Kamu belum terdaftar membership nih. Yuk! Langganan sekarang untuk nikmati film-film terbaik sepuasnya
        </p>
        <div className="mb-4 btn-action">
          <Button variant="primary">
            Daftar Membership
          </Button>
        </div>

        <p>
          Kamu sudah terdaftar sebagai member sampai dengan <b>30/12/2021 23:59:59</b>.<br></br> Perpanjangan akan dilakukan secara otomatis
        </p>
        <div className="mb-4 btn-action">
          <Button variant="primary">
            Batal membership
          </Button>
        </div>
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

export default SubscriptionPage;