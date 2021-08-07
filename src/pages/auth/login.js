
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';

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
            <Card >
              <Card.Body>
                <div className="mb-4">
                  <div className="d-flex">
                    <Link className="me-3" to="/login">
                      <h2>Login</h2>
                    </Link>
                    <Link className="me-3" to="/register">
                      <h2>Register</h2>
                    </Link>
                  </div>
                  <h6 style={{ fontWeight: 400 }}>Masukan email dan password anda</h6>
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
                  <div className="mb-2">
                    <Button variant="primary" onClick={() => onLogin()}>
                      Login
                    </Button>
                  </div>
                  <div className="mb-4">
                    <Link to="#">
                      Forgot Password
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
    marginTop: 48
  },
  wrapperLogo: {
    marginBottom: 36,
    textAlign: 'center'
  }
}

export default Login;