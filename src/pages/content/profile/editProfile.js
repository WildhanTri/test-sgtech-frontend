
import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import UserService from "../../../services/UserService";
import { UserContext } from "../../../stores/userProvider";
import { convertISODateToYYYYMMDD } from "../../../utils/util";

const EditProfile = () => {

  const { user } = useContext(UserContext)

  const [stateUser, setStateUser] = user

  const [firstName, setFirstName] = useState(stateUser.user_first_name)
  const [lastName, setLastName] = useState(stateUser.user_last_name)
  const [email, setEmail] = useState(stateUser.user_email)
  const [birthday, setBirthday] = useState(stateUser.user_birthday)
  const [gender, setGender] = useState(stateUser.user_gender)

  const userService = new UserService();

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
    var user = {
      user_first_name: firstName,
      user_last_name: lastName,
      user_email: email,
      user_birthday: birthday,
      user_gender: gender
    }
    userService.updateProfile(user)
      .then((resolve) => {
        setStateUser(resolve.object)
        localStorage.setItem("user", JSON.stringify(resolve.object))
      })
  };

  return (
    <div className="container" style={styles.container}>
      <h1 className="mb-4">My Profile</h1>
      <Form className="mb-4">

        <Form.Group className="mb-3" controlId="profileEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <p>{email}</p>
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="profileFirstName">
              <Form.Label className="fw-bold">First name</Form.Label>
              <Form.Control type="text" placeholder="First name" value={firstName}
                onChange={newFields => {
                  inputOnchangeHandler(newFields)
                }} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="profileLastName">
              <Form.Label className="fw-bold">Last name</Form.Label>
              <Form.Control type="text" placeholder="Last name" value={lastName}
                onChange={newFields => {
                  inputOnchangeHandler(newFields)
                }} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="profileBirthday">
          <Form.Label className="fw-bold">Tanggal lahir</Form.Label>
          <Form.Control type="date" placeholder="Tanggal Lahir" value={convertISODateToYYYYMMDD(birthday)}
            onChange={newFields => {
              inputOnchangeHandler(newFields)
            }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="profileGender">
          <Form.Label className="fw-bold">Jenis kelamin</Form.Label>
          <Form.Select value={gender}
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
    padding: 48,
    background:'white'
  },
}

export default EditProfile;