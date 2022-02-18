import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Navigation() {
    const {currentUser, logout, authenticate} = useAuth();

    return (
        <Navbar variant="dark" bg="dark" expand="md" className="p-2">
            <Navbar.Brand href="/">ResourcePlus</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav className="mr-auto">
                        {currentUser && 
                        <>
                        <Nav.Link href="#/Resources">Resources</Nav.Link>
                        <Nav.Link href="#/Categories">Categories</Nav.Link>
                        </>
                    }
                        <Nav.Link href="#/Bootstrap">Bootstrap</Nav.Link>
                        <Nav.Link href="#/routing">Routing/Auth</Nav.Link>
                        <Nav.Link href="#/testing">Testing</Nav.Link>
                    {currentUser &&
                        <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                    }
                    {currentUser === null &&
                        <Nav.Link onClick={() => authenticate()}>Login</Nav.Link>
                    }
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
