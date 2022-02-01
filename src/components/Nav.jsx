import React from "react";
import { 
    Container,
    Nav,

 } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


function NavBar(){
    return(
        <div>
            <header>
                <h1>Lord of the API</h1>
                <Container>
                    <Nav variant="tabs" fill>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to='/home'>Home</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={'Books'} href="/books" >Books</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={'Movies'} href="/movies">Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={'Characters'} href="/characters">Characters</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </header>
        </div>
    )
}

export default NavBar