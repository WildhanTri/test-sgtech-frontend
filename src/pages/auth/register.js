
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Register = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {

  }, [])

  const inputOnchangeHandler = (event) => {
    switch (event.target.id) {
      case "registerFirstName":
        setFirstName(event.target.value)
        break
      case "registerLastName":
        setLastName(event.target.value)
        break
      case "registerEmail":
        setEmail(event.target.value)
        break
      case "registerPassword":
        setPassword(event.target.value)
        break
      default:
        break
    }
  }

  const onRegister = () => {
    console.log(`${firstName} ${lastName}`)
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
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="registerFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Last name"
                          onChange={newFields => {
                            inputOnchangeHandler(newFields)
                          }} />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="registerLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="First name"
                          onChange={newFields => {
                            inputOnchangeHandler(newFields)
                          }} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="registerEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                      onChange={newFields => {
                        inputOnchangeHandler(newFields)
                      }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="registerPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                      onChange={newFields => {
                        inputOnchangeHandler(newFields)
                      }} />
                  </Form.Group>
                </Form>

                <div className="text-center">
                  <div className="mb-2">
                    <Button variant="primary" onClick={() => onRegister()}>
                      Register
                    </Button>
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

export default Register;