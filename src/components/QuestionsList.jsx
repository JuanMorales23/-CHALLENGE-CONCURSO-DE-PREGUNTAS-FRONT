import React, { useEffect } from 'react';
import Table from "react-bootstrap/Table";
import '../components/assets/css/Settings.css'

const QuestionsList = ({ questions }) => {

    useEffect(() => {
    }, [questions])

    return (
        <div>
            <h3>
                Questions list
            </h3>
            <Table striped bordered hover responsive="md" className='list'>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Level</th>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map(q => (
                            <tr>
                                    <td>
                                        {q.category}
                                    </td>
                                    <td>
                                        {q.level}
                                    </td>
                                    <td>
                                        {q.question}
                                    </td>
                                    <td>
                                        {q.correctAnswer}
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default QuestionsList