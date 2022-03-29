import React, { useEffect, useState } from 'react'
import QuestionsList from './QuestionsList';
import axios from 'axios';
import SettingsForm from './SettingsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
    const [questions, setQuestions] = useState([]);

    const getQuestions = () => {
        axios.get('http://localhost:8080/question').then(({data}) => setQuestions(data));
    }

    const setQuestion = (val) => {
        axios.post('http://localhost:8080/question', val).then(() => getQuestions);
    }

    useEffect(getQuestions, []);

    return (
        <div className='container'>
            <FontAwesomeIcon icon={faCircleChevronLeft} />
            <div className='row'>
                <div className='col col-md-6'>
                    <h2>Add a question</h2>
                    <SettingsForm setQuestion={setQuestion} />
                </div>
            </div>
            <div className='row'>
                <QuestionsList questions={questions} />
            </div>
        </div>
    )
}

export default Settings;