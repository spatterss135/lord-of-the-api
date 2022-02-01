import React from "react";
import { 
    Container,
    Nav,

 } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


function NavBar(){
    return(
        <div>
            <header>
                <h1>Lord of the API</h1>
                <Container>
                    <Nav variant="tabs" fill>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to='/books'>Books</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to='/movies'>Movies</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link>
                                <Link to='/characters'>Characters</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </header>
        </div>
    )
}

export default NavBar