import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Question from './Question';
import ScoreNavbar from './ScoreNavbar';

const Game = () => {
    let { name } = useParams();
    const [playerName, setPlayerName] = useState("");
    const [score, setScore] = useState(0);
    const [id, setId] = useState();
    const [level, setLevel] = useState(1);

    const setPlayerInfo = async () => {
        const url = `http://localhost:8080/player/${id}`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        setPlayerName(responseJSON.name);
        setScore(responseJSON.score);
    }

    const getPlayerByName = (name) => {
        axios.get(`http://localhost:8080/player/getId/${name}`).then(({ data }) => {
            //setPlayerInfo();
            setId(data);
        });
    }

    useEffect(() => {
      getPlayerByName(name);
      setPlayerInfo();
      }
    , []);


    return (
        <div>
            <ScoreNavbar name={playerName} level={level} score={score}/>
            <Question level={level} setLevel={setLevel} score={score} setScore={setScore}
             name={name}
             />
        </div>
    )
}

export default Game