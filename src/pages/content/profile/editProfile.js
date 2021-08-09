
import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';

const EditProfile = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("triherlian@gmail.com")
  const [birthday, setBirthday] = useState("")
  const [gender, setGender] = useState("")

  useEffect(() => {

  }, [])


  const inputOnchangeHandler = (event) => {
    switch (event.target.id) {
      case "profileFirstName":
        setFirstName(event.target.value)
        break
      case "profileLastName":
        setLastName(event.target.value)
        break
      case "profileEmail":
        setEmail(event.target.value)
        break
      case "profileBirthday":
        setBirthday(event.target.value)
        break
      case "profileGender":
        setGender(event.target.value)
        break
      default:
        break
    }
  }

  const onUpdate = () => {
    console.log(`${firstName} ${lastName}`)
    console.log(email)
    console.log(birthday)
    console.log(gender)
  };

  return (
    <div className="container" style={styles.container}>
      <h1 className="mb-4">Edit Profile</h1>
      <Form className="mb-4">

        <Form.Group className="mb-3" controlId="profileEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <p>{email}</p>
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="profileFirstName">
              <Form.Label className="fw-bold">First name</Form.Label>
              <Form.Control type="text" placeholder="Last name"
                onChange={newFields => {
                  inputOnchangeHandler(newFields)
                }} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="profileLastName">
              <Form.Label className="fw-bold">Last name</Form.Label>
              <Form.Control type="text" placeholder="First name"
                onChange={newFields => {
                  inputOnchangeHandler(newFields)
                }} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="profileBirthday">
          <Form.Label className="fw-bold">Tanggal lahir</Form.Label>
          <Form.Control type="date" placeholder="Tanggal Lahir"
            onChange={newFields => {
              inputOnchangeHandler(newFields)
            }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="profileGender">
          <Form.Label className="fw-bold">Jenis kelamin</Form.Label>
          <Form.Select
            onChange={newFields => {
              inputOnchangeHandler(newFields)
            }} >
            <option selected disabled>Pilih jenis kelamin anda</option>
            <option value="M">Laki-laki</option>
            <option value="F">Wanita</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <div className="text-end pt-4">
        <div className="mb-4 btn-action">
          <Button variant="primary" onClick={() => onUpdate()}>
            Save
          </Button>
        </div>
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

export default EditProfile;