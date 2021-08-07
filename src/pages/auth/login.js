
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';

import './auth.scss';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {

  }, [])


  const inputOnchangeHandler = (event) => {
    switch (event.target.id) {
      case "loginEmail":
        setEmail(event.target.value)
        break
      case "loginPassword":
        setPassword(event.target.value)
        break
      default:
        break
    }
  }

  const onLogin = () => {
    console.log(email)
    console.log(password)
  };

  return (
    <div style={styles.container}>
      <div className="row">
        <div className="col-md-2 col-lg-3"></div>
        <div className="col-md-8 col-lg-6">
          <div style={styles.wrapper}>
            <div style={styles.wrapperLogo}>
              <h1>Logo</h1>
            </div>
            <Card style={styles.wrapperCard}>
              <Card.Body>
                <div className="mb-4">
                  <div className="d-flex">
                    <h1>Login</h1>
                  </div>
                </div>
                <Form className="mb-4">
                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                      onChange={newFields => {
                        inputOnchangeHandler(newFields)
                      }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                      onChange={newFields => {
                        inputOnchangeHandler(newFields)
                      }} />
                  </Form.Group>
                </Form>

                <div className="text-center">
                  <div className="mb-2 btn-action">
                    <Button variant="primary" onClick={() => onLogin()}>
                      Login
                    </Button>
                  </div>
                  <div className="mb-4">
                    <Link to="#" className="mb-4 btn-action-sub">
                      Forgot Password?
                    </Link>
                  </div>
                  <div>
                    <span className="me-1">
                      Belum punya akun?
                    </span>
                    <Link to="/register" className="btn-action-sub">
                      Register
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>

          </div>
        </div>
        <div className="col-md-2 col-lg-3"></div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'left'
  },
  wrapper: {
    padding: "36px 24px",
    marginTop: 16
  },
  wrapperLogo: {
    marginBottom: 36,
    textAlign: 'center'
  },
  wrapperCard: {
    padding: "16px 24px",
  }
}

export default Login;