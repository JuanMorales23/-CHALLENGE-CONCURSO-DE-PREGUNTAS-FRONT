import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from "@fortawesome/free-solid-svg-icons";
import UserList from './UserList';
import axios from 'axios';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const username = useRef();

    const getPlayers = () => {
        axios.get('http://localhost:8080/player').then(({data}) => setPlayers(data));
    }

    const setPlayer = (values) => {
        axios.post('http://localhost:8080/player', values).then(() => getPlayers);
    }

    const handleForm = () => {
        let val = {
            name: username.current.value,
            score: 0
        }
        setPlayer(val);
    }

    useEffect(getPlayers, []);
    

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col col-md-3'>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Player</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" ref={username} required/>
                            </Form.Group>
                            <Button variant="primary" onClick={() => {handleForm()}}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className='col col-md-2 '>
                        <Button variant="outline-info">
                        <FontAwesomeIcon icon={faGear} />
                            Settings
                        </Button>{' '}
                    </div>
                </div>
                <div className='row'>
                    <UserList players={players} />
                </div>
            </div>
        </div>
    )
}

export default Home;