
import React, { useContext } from "react";

import { UserContext } from "../stores/userProvider";
import { Button, Nav, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {

  const { user } = useContext(UserContext)

  const [stateUser, setStateUser] = user

  return (
    <div style={style.container}>
      <div style={style.logoWrapper}>
        LOGO
      </div>
      <div style={style.menuNav}>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li" style={style.menuNavItem}>
            <Nav.Link href="/home">StreamPlus</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" style={style.menuNavItem}>
            <Nav.Link eventKey="link-1">Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" style={style.menuNavItem}>
            <Nav.Link eventKey="link-2">Series</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div style={style.menuSearch}>
        <Form style={{ maxWidth: '512px', width: '100%' }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Cari film / serial..." />
          </Form.Group>
        </Form>
      </div>

      {
        stateUser != null &&
        <div style={{ display: 'flex' }}>
          <div style={style.menuLibrary}>
            <Button variant="primary">
              My Library
            </Button>
          </div>

          <Link to="/profile" style={{textDecoration:"none"}}>
            <div style={style.menuProfile}>
              <img style={style.menuProfilePicture} src={'https://thispersondoesnotexist.com/image'} alt={'Profile'} />
              <div style={style.menuProfileName}>
                <p style={style.menuProfileFullName} className="m-0">{stateUser.user_first_name}</p>
                <p style={style.menuProfileSubscriptionStatus} className="m-0">{stateUser.user_email}</p>
              </div>
            </div></Link>
        </div>
      }
    </div>
  )
}

const style = {
  container: {
    display: 'flex',
    boxShadow: '1px 2px 0px 0px #e5e5e5',
    position: 'fixed',
    width: '100%',
    background: 'white',
    zIndex: '1'
  },

  logoWrapper: {
    textAlign: 'left',
    fontSize: 36,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 48,
    paddingRight: 72
  },
  menuNav: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 64
  },
  menuSearch: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0px 24px'
  },
  menuNavItem: {
    marginRight: 24
  },
  menuLibrary: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 24px',
  },
  menuProfile: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 24px',
    width: 240
  },
  menuProfilePicture: {
    borderRadius: '50%',
    width: 48,
    height: 48,
    objectFit: 'cover',
    marginRight: 16
  },
  menuProfileName: {
    textAlign: 'left'
  },
  menuProfileFullName: {
    fontWeight: 'bold',
    fontSize: 18
  },
  menuProfileSubscriptionStatus: {
    fontSize: 12
  }
}

export default Header