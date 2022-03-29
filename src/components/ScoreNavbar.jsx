import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const ScoreNavbar = ({player, round, reward}) => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="">Player: {player}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Level: {round}</Nav.Link>
            <Nav.Link href="">Score: {reward} </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default ScoreNavbar