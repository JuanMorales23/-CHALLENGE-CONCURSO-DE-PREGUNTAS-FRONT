import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const ScoreNavbar = ({playerName, level, score}) => {
    
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="">Player: {playerName}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Level: {level}</Nav.Link>
            <Nav.Link href="">Score: {score}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default ScoreNavbar