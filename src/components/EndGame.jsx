import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';


const EndGame = ({ visible, setVisible, score, name, exitGame, setExitGame, setPause, handleEndGame }) => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState();
    const [option, setOption] = useState();
    const [info, setInfo] = useState({})
    const handleClose = () => setShow(false);

    const updateScore = (name) => {
        axios.get(`http://localhost:8080/player/getId/${name}`).then(({ data }) => {
            setId(data);
        });
        let values = {
            id: id,
            name: name,
            score: score
        }
        setInfo(values);
        setScore();
    }

    const setScore = () => {
        console.log(info); 
        axios.put(`http://localhost:8080/player`, info).then(() => {});
    }

    const handleExit = () => {
        setOption(false);
        updateScore(name);
    }

    const handleDecrease = () => {
        setExitGame(false);
        setPause(false);
        setVisible(false);
        handleClose()
    }

    useEffect(() => {
        if (exitGame === true) {
            setOption(true);
            setShow(visible);
        } else {
            updateScore(name);
            setOption(false);
            setShow(visible);
        }
    }, [visible]);

    const exitTitle = () => {
        return <b>Go back</b>
    }

    const endTitle = () => {
        return <b>Game over</b>
     }

    const exitBodyText = () => {
        return <b>"Do you really want to exit?"</b>
    }

    const endBodyText = () => {
       return <b>Score: {score}</b>
    }

    const exitButtons = () => {
        return (
            <div className='row'>
                <div className='col'>
                    <Button variant="success" onClick={handleDecrease}>
                        Cancel
                    </Button>
                </div>
                <div className='col'>
                    <Button variant="danger" onClick={handleExit} as={Link} to={"/"}>
                        Exit
                    </Button>
                </div>
            </div>);
    }

    const endButtons = () => {
        return (
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
        );
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                         {option ? exitTitle() : endTitle()}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {option ? exitBodyText() : endBodyText()}
                </Modal.Body>
                <Modal.Footer>
                    {option ? exitButtons() : endButtons()}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EndGame;