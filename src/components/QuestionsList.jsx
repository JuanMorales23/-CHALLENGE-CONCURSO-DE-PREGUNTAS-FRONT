import React, { useEffect } from 'react';
import Table from "react-bootstrap/Table";

const QuestionsList = ({ questions }) => {

    useEffect(() => {
    }, [questions])
    
    return (
        <div>
            <h3>
                User list's
            </h3>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Level</th>
                        <th>Question</th>
                        <th>Edit</th>
                        <th>Delete</th>
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
                                        {//to edit
                                        }
                                    </td>
                                    <td>
                                        {}
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