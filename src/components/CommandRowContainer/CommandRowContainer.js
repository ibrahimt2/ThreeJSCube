import React from "react"
import Table from 'react-bootstrap/Table'
import CommandRow from '../CommandRow/CommandRow.js'

/** CommandRowContainer.
 * 
 *  Takes a list of commands and creates rows for each of them. Displays table with passed in commands
 * 
 *  Renders: CommandRow
 * 
 *  Rendered By: Command Pane
 * @param {*} param0 
 * @returns 
 */

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