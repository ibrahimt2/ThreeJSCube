import React from "react"
import Table from 'react-bootstrap/Table'
import CommandRow from '../CommandRow/CommandRow.js'

function CommandRowContainer ({commandArray}) {


    return (
        <React.Fragment>
            <Table bordered hover size="sm" responsive="sm">
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>Z</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(commandArray).map((elem) => (<CommandRow command={elem}></CommandRow>))}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default CommandRowContainer