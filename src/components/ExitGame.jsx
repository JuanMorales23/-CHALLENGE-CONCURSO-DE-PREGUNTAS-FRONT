import { Modal } from 'bootstrap';
import React from 'react';
import { Button } from 'react-bootstrap';

const ExitGame = ({ show, handleClose }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><b>Finish</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Are you sure do you want to finish the game?</b>
                </Modal.Body>
                <Modal.Footer>
                    <div className='row'>
                        <div className='col'>
                            <Button variant="primary" onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                        <div className='row'>
                            <Button variant="primary" onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ExitGame