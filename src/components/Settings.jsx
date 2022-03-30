import React, { useEffect, useState } from 'react'
import QuestionsList from './QuestionsList';
import axios from 'axios';
import SettingsForm from './SettingsForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import '../components/assets/css/Settings.css'

const Settings = () => {
    const [questions, setQuestions] = useState([]);

    const getQuestions = () => {
        axios.get('http://localhost:8080/question').then(({data}) => setQuestions(data));
    }

    const setQuestion = (val) => {
        axios.post('http://localhost:8080/question', val).then(({data}) => console.log(data));
    }

    useEffect(getQuestions, []);

    return (
        <div className='container samebg'>
            <div className='row'>
                <div className='col col-md-3'>
                <Link to={`/`}>
            <FontAwesomeIcon icon={faCircleChevronLeft} size="2x"/>
            </Link>
                </div>
                <div className='col col-md-6'>
                    <h2>Add a question</h2>
                    <SettingsForm setQuestion={setQuestion} />
                </div>
            </div>
            <div className='row mt-4'>
                <div className="col">
                <QuestionsList questions={questions} />
                </div>
            </div>
        </div>
    )
}

export default Settings;