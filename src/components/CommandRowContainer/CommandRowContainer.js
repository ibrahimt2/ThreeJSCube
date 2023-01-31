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
        <div className='bg-light p-3 my-4 rounded'>
            <Table bordered hover size="sm" responsive="sm">
                <thead>
                    <tr>
                        <th xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>Command</th>
                        <th xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>X</th>
                        <th xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>Y</th>
                        <th xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>Z</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(commandArray).map((elem) => (<CommandRow command={elem}></CommandRow>))}
                </tbody>
            </Table>
        </div>
    )
}

export default CommandRowContainer