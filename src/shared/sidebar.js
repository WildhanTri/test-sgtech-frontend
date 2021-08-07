import React from "react";
import { UserContext } from "../stores/userProvider";
import { Button, ListGroup } from 'react-bootstrap';

export default class Sidebar extends React.Component {

    static contextType = UserContext

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={this.style.container}>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }

    style = {
        container: {
            paddingTop: '60px',
            position: 'fixed',
            right: 0,
            height: '100%',
            border: '1px solid #e5e5e5',
            boxShadow: '1px 2px 0px 0px #e5e5e5',
            background: 'white',
            zIndex: '2'
        }
    }
}
