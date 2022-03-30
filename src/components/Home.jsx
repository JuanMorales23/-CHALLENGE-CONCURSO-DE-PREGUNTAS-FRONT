import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../components/assets/css/Home.css';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [used, setUsed] = useState(false);
    const [warning, setWarning] = useState("");
    const username = useRef();
    const history = useNavigate();

    const getPlayers = () => {
        axios.get('http://localhost:8080/player').then(({ data }) => setPlayers(data));
    }


    const usedPlayer = (name) => {
        axios.get(`http://localhost:8080/player/exist/${name}`).then(({ data }) => { setUsed(data) });
    }

    const setPlayer = (values) => {
        axios.post('http://localhost:8080/player', values).then(() => getPlayers);
    }

    const handleInputChange = () => {
        let name = username.current.value;
        usedPlayer(name);
        if (used === true) {
            setWarning("Username has already used")
        } else {
            setWarning("You can use it!");
        }
    }

    const handleForm = (e) => {
        e.preventDefault();
        let name = username.current.value;
        usedPlayer(name);
        if (used === true) {
            setWarning("Username has already used");
        } else {
            setWarning("You can use it!");
            let val = {
                name: username.current.value,
                score: 0
            }
            setPlayer(val);
            let url = username.current.value;
            history(`/game/${url}`);
        }
    }

    useEffect(getPlayers, []);


    return (
        <div>
            <div className='container'>
            <div className='row d-flex justify-content-end mb-auto'>
                        <div className='col '>
                            <Button variant="outline-dark" as={Link} to="/settings">
                                <FontAwesomeIcon icon={faGear} />
                                Settings
                            </Button>{' '}
                        </div>
                    </div>
                <div className='row d-flex justify-content-center align-items-center mt-5'>
                    <div className='col col-md-5 form'>
                        <Form onSubmit={handleForm}>
                            <Form.Group className="mb-3" controlId="form">
                                <Form.Label>Player</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" onChange={handleInputChange} ref={username} required />
                            </Form.Group>
                            <p>{warning}
                            </p>
                            <Button variant="primary" type="submit">
                                Start!
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;