import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import categories from "./assets/js/categories";
import { Button } from 'react-bootstrap';

const SettingsForm = ({ setQuestion }) => {
    const questionCategories = categories;
    const category = useRef();
    const level = useRef();
    const question = useRef();
    const correctAnswer = useRef();
    const incorrect1 = useRef();
    const incorrect2 = useRef();
    const incorrect3 = useRef();

    const handleForm = (e) => {
        e.preventDefault();
        let val = {
            category: category.current.value,
            level: level.current.value,
            question: question.current.value,
            correctAnswer: correctAnswer.current.value,
            incorrect1: incorrect1.current.value,
            incorrect2: incorrect2.current.value,
            incorrect3: incorrect3.current.value,
        }
        setQuestion(val);
        resetForm();
    }

    const resetForm = () => {
        level.current.value = 1;
        question.current.value = null;
        correctAnswer.current.value = null;
        incorrect1.current.value = null;
        incorrect2.current.value = null;
        incorrect3.current.value = null;
    }

    return (
        <div>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formCategory">
                    <div className='row'>
                        <div className='col col-md-6'>
                            <Form.Label>Category</Form.Label>
                            <Form.Select type="text" ref={category} >
                                {questionCategories.map((cat) => (
                                    <option value={cat.name} key={cat.id}>{cat.name}</option>
                                ))}
                            </Form.Select>
                        </div>
                        <div className='col col-md-4'>
                            <Form.Label>Level</Form.Label>
                            <Form.Select type="number" ref={level} >
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </Form.Select>
                        </div>
                    </div>
                    <br />
                    <Form.Label>Question</Form.Label>
                    <Form.Control type="text" placeholder="Type your question" ref={question} required />
                    <br />
                    <Form.Label>Correct Answer</Form.Label>
                    <Form.Control type="text" placeholder="Type the correct answer" ref={correctAnswer} required />
                    <br />
                    <Form.Label>Incorrect option 1</Form.Label>
                    <Form.Control type="text" placeholder="Type the incorrect option" ref={incorrect1} required />
                    <br />
                    <Form.Label>Incorrect option 2</Form.Label>
                    <Form.Control type="text" placeholder="Type the incorrect option" ref={incorrect2} required />
                    <br />
                    <Form.Label>Incorrect option 3</Form.Label>
                    <Form.Control type="text" placeholder="Type the incorrect option" ref={incorrect3} required />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SettingsForm