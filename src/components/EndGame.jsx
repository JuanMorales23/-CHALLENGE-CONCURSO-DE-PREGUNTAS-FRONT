import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'


const EndGame = ({visible, level, score, name}) => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState(); 
    const handleClose = () => setShow(false);

    const updateScore = (name) => {
        axios.get(`http://localhost:8080/player/getId/${name}`).then(({ data }) => {
            setId(data);
        });
    }

    useEffect(() => {
        updateScore();
        setShow(visible);
    }, [visible]);

    return (        
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><b>Game over</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Final Score: {score}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EndGame;