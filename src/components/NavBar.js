import React from 'react'
import { Navbar, Badge } from 'react-bootstrap';

class NavBar extends React.Component {

    state = {
        badgeCount: 0
    }

    render() {

        return <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    Cart-Example
                    <Badge variant="secondary"> {this.state.badgeCount} </Badge>
                </Navbar.Brand>
            </Navbar>
        </div>
    }
}

export default NavBar;

