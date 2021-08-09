
import { Button } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import './styles.scss'
import { UserContext } from "../../../stores/userProvider";
import { convertISODateToYYYYMMDD } from "../../../utils/util";
import UserService from "../../../services/UserService";

const SubscriptionPage = () => {

  const { user } = useContext(UserContext)
  const [stateUser, setStateUser] = user

  const [stateLoadingSubscription, setStateLoadingSubscription] = useState(false)

  const userService = new UserService();

  useEffect(() => {

  }, [])

  const startSubscription = () => {
    setStateLoadingSubscription(true)
    setTimeout(() => {
      userService.startMembership()
        .then((resolve) => {
          setStateLoadingSubscription(false)
          setStateUser({ ...stateUser, user_membership_status: 1 })
        })
        .catch((err) => {
          alert(err)
          setStateLoadingSubscription(false)

        })
    }, 2000)
  }

  const cancelSubscription = () => {
    setStateLoadingSubscription(true)
    setTimeout(() => {
      userService.cancelMembership()
        .then((resolve) => {
          setStateLoadingSubscription(false)
          setStateUser({ ...stateUser, user_membership_status: 0 })
        })
        .catch((err) => {
          alert(err)
          setStateLoadingSubscription(false)
        })
    }, 2000)
  }

  return (
    <div className="container" style={styles.container}>
      <h1 className="mb-4">Subscription</h1>

      <div className="text-start">
        {
          stateUser.user_membership_status === 0 && new Date(stateUser.user_membership_latest_date) < new Date() &&
          <p>
            Kamu belum terdaftar membership nih. Yuk! Langganan sekarang untuk nikmati film-film terbaik sepuasnya
          </p>
        }
        {
          stateUser.user_membership_status === 0 && new Date(stateUser.user_membership_latest_date) >= new Date() &&
          <p>
            Membership kamu belum diaktifkan lagi. Masa membership kamu hanya sampai dengan <b>{convertISODateToYYYYMMDD(stateUser.user_membership_latest_date)}</b>
          </p>
        }
        {
          stateUser.user_membership_status === 1 && new Date(stateUser.user_membership_latest_date) >= new Date() &&
          <p>
            Kamu sudah terdaftar sebagai member sampai dengan <b>{convertISODateToYYYYMMDD(stateUser.user_membership_latest_date)}</b>.<br></br> Perpanjangan akan dilakukan secara otomatis
          </p>
        }
        {
          stateUser.user_membership_status === 0 &&
          <div className="mb-4 btn-action d-flex align-items-center">
            <Button variant="primary" onClick={() => startSubscription()} disabled={stateLoadingSubscription}>
              Daftar Membership
            </Button>
            {
              stateLoadingSubscription &&
              <div className="spinner-border text-primary ms-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          </div>
        }
        {
          stateUser.user_membership_status === 1 &&
          <div className="mb-4 btn-action d-flex align-items-center">
            <Button variant="primary" onClick={() => cancelSubscription()} disabled={stateLoadingSubscription}>
              Batal membership
            </Button>
            {
              stateLoadingSubscription &&
              <div className="spinner-border text-primary ms-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'left',
    padding: 48,
    background: 'white'
  },
}

export default SubscriptionPage;