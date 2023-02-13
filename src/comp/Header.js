import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="Todo">Todo</Nav.Link>
                            <Nav.Link href="login">Login</Nav.Link>
                            <Nav.Link href="register">Register</Nav.Link>
                            <Nav.Link href="calculater">Calculater</Nav.Link>
                            <Nav.Link href="StateExam">StateExam</Nav.Link>
                        </Nav>
                    </Container>
                    </Navbar>
            </div>
        )
    }
}

export default Header