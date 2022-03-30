import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EndGame from './EndGame'
import Timer from './Timer'

const Question = ({ level, setLevel, score, setScore, name }) => {
    const [question, setQuestion] = useState();
    const [correctAnswer, setCorrectAnswer] = useState();
    const [options, setOptions] = useState([]);
    const [restart, setRestart] = useState(false);
    const [pause, setPause] = useState(false);
    const [modalEndGame, setModalEndGame] = useState(false);
    const [modalExitGame, setModalExitGame] = useState(false);
    const [disButtons, setDisButtons] = useState({ btns: [{ id: 1, actually: false }, { id: 2, actually: false }, { id: 4, actually: false }, { id: 4, actually: false }] });
    const [button1, setButton1] = useState("secondary");
    const [button2, setButton2] = useState("info");
    const [button3, setButton3] = useState("warning");
    const [button4, setButton4] = useState("primary");
    let accumulated = 0;

    const getQuestion = async () => {
        let optionsArray = [];
        axios.get(`http://localhost:8080/question/level/${level}`).then(({ data }) => {
            setQuestion(data[0].question);
            optionsArray[0] = data[0].incorrect1;
            optionsArray[1] = data[0].incorrect2;
            optionsArray[2] = data[0].incorrect3;
            optionsArray[3] = data[0].correctAnswer;
            setCorrectAnswer(data[0].correctAnswer);
            randomizeOptions(optionsArray);
        });
    };

    const verifyQuestion = (answer, btn) => {
        if (level <= 5) {
            if (answer === correctAnswer) {
                handleReward();
                setPause(true);
                handleColor(true, btn);
                disableAllButtons();
                setTimeout(() => {
                    nextQuestion();
                    setRestart(!restart);
                    setPause(false);
                    resetColors();
                    enableAllButtons();
                }, 5000);
            } else {
                handleColor(false, btn);
                handleEndGame();
                setPause(true);
            }
        }
    }

    const handleReward = () => {
        accumulated = score + (level ** level);
        setScore(accumulated);
    }

    const handleEndGame = () => {
        disableAllButtons();
        setModalEndGame(true);
    }

    const handleExitGame = () => {
        setModalExitGame(true);
    }

    const randomizeOptions = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setOptions(array);
    }

    const handleColor = (ans, btn) => {
        switch (ans) {
            case true:
                switch (btn) {
                    case 1:
                        setButton1("success");
                        break;
                    case 2:
                        setButton2("success");
                        break;
                    case 3:
                        setButton3("success");
                        break;
                    default:
                        setButton4("success");
                        break;
                }
                break;
            default:
                switch (btn) {
                    case 1:
                        setButton1("danger");
                        if (options[1] === correctAnswer) {
                            setButton2("success");
                        } else if (options[2] === correctAnswer) {
                            setButton3("success");
                        } else {
                            setButton4("success");
                        }
                        break;
                    case 2:
                        setButton2("danger");
                        if (options[0] === correctAnswer) {
                            setButton1("success");
                        } else if (options[2] === correctAnswer) {
                            setButton3("success");
                        } else {
                            setButton4("success");
                        }
                        break;
                    case 3:
                        setButton3("danger");
                        if (options[0] === correctAnswer) {
                            setButton1("success");
                        } else if (options[1] === correctAnswer) {
                            setButton2("success");
                        } else {
                            setButton4("success");
                        }
                        break;
                    default:
                        setButton4("danger");
                        if (options[0] === correctAnswer) {
                            setButton1("success");
                        } else if (options[1] === correctAnswer) {
                            setButton2("success");
                        } else {
                            setButton3("success");
                        }
                        break;
                }
                break;
        }

    }

    const disableAllButtons = () => {
        const buttons = disButtons.btns;
        buttons.map((b) => {
            b.actually = true;
        });
    }

    const enableAllButtons = () => {
        const buttons = disButtons.btns;
        buttons.map((b) => {
            b.actually = false;
        });
    }

    const resetColors = () => {
        setButton1("secondary");
        setButton2("info");
        setButton3("warning");
        setButton4("primary")
    }

    const nextQuestion = async () => {
        if (level <= 5) {
            const i = (level + 1);
            setLevel(i);
        }
    };

    useEffect(() => {
        getQuestion();
    }, [level]);


    return (
        <div>
            <div className='row'>
                <div className=''>
                    <Link to={`/`}
                onClick={() => {handleExitGame()}} >
                        <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" />
                    </Link>
                </div>
            </div>
            <Modal.Dialog size="lg">
                <Modal.Header>
                    <Modal.Title>
                        <b>Tiempo: {//<Timer restart={restart} pause={pause}  setModalEndGame={setModalEndGame} />
                        }
                            s
                        </b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><b>{question}</b></p>
                </Modal.Body>
                <Modal.Footer>
                    <table className="row d-flex justify-content-center">
                        <tr>
                            <td>
                                <Button variant={button1} style={{ width: "22rem" }} className="mb-2"
                                    onClick={() => { verifyQuestion(options[0], 1) }} disabled={disButtons.btns[0].actually}>
                                    <b>{options[0]}</b>
                                </Button>
                            </td>
                            <td>
                                <Button variant={button2} style={{ width: "22rem" }} className="mb-2"
                                    onClick={() => { verifyQuestion(options[1], 2) }} disabled={disButtons.btns[1].actually}>
                                    <b>{options[1]}</b>
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button variant={button3} style={{ width: "22rem" }} className="mb-2"
                                    onClick={() => { verifyQuestion(options[2], 3) }} disabled={disButtons.btns[2].actually}>
                                    <b>{options[2]}</b>
                                </Button>
                            </td>
                            <td>
                                <Button variant={button4} style={{ width: "22rem" }} className="mb-2"
                                    onClick={() => { verifyQuestion(options[3], 4) }} disabled={disButtons.btns[3].actually}>
                                    <b>{options[3]}</b>
                                </Button>
                            </td>
                        </tr>
                    </table>
                </Modal.Footer>
            </Modal.Dialog>
            <EndGame modalEndGame={modalEndGame} level={level} score={score} name={name} />
        </div>
    )
}

export default Question