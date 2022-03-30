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
    const [id, setId] = useState();
    const [used, setUsed] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [warning, setWarning] = useState("");
    const username = useRef();
    const history = useNavigate();
    let val = {};

    const getPlayers = () => {
        axios.get('http://localhost:8080/player').then(({ data }) => setPlayers(data));
    }

    const getPlayerByName = (name) => {
        axios.get(`http://localhost:8080/player/getId/${name}`).then(({ data }) => setId(data));
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
        console.log("Tecleado: " + name);
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
            setWarning("Username has already used")
        } else {
            setWarning("You can use it!");
            setPlayerName(name);
            val = {
                name: username.current.value,
                score: 0
            }

            setPlayer(val);
            history(`/game/${playerName}`);
        }

        //as={Link} to={`/game/${urlId}`}
    }

    useEffect(getPlayers, []);


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col col-md-3 form'>
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
                    <div className='col col-md-2 settings'>
                        <Button variant="outline-info" as={Link} to="/settings">
                            <FontAwesomeIcon icon={faGear} />
                            Settings
                        </Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;