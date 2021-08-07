
import React, { useContext } from "react";

import { UserContext } from "../stores/userProvider";
import { Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

    const { user } = useContext(UserContext)

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
                        <Nav.Link eventKey="link-2">My Library</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <div style={style.menuProfile}>
                <Button variant="primary">
                    <FontAwesomeIcon icon="shopping-cart" className="me-2" /> 
                    Keranjang
                </Button>
            </div>

            <div style={style.menuProfile}>
                <img style={style.menuProfilePicture} src={'https://thispersondoesnotexist.com/image'} alt={'Profile'} />
                <div style={style.menuProfileName}>
                    <p style={style.menuProfileFullName} className="m-0">John Doe</p>
                    <p style={style.menuProfileSubscriptionStatus} className="m-0">Subscription not actived </p>
                </div>
            </div>
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
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    menuNavItem: {
        marginRight: 24
    },
    menuProfile: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 24px'
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