import CommandRowContainer from '../../components/CommandRowContainer/CommandRowContainer.js'
import CommandAdd from '../../components/CommandAdd/CommandAdd.js'
import Button from 'react-bootstrap/esm/Button.js'
import React from 'react'

/**
 *  CommandPane.
 *  
 *  Displays all UI elements that have to do with managing Command List. 
 *  
 *  Renders: CommandAdd, CommandRowContainer
 * 
 */

function CommandPane({ cubeMachineState, send }) {
    return (
        <React.Fragment>
            <CommandAdd send={send} cubeMachineState={cubeMachineState}></CommandAdd>
            <CommandRowContainer commandArray={cubeMachineState.context.commands}></CommandRowContainer>
            <Button variant="primary"
                onClick={(e) => {
                    send("Process list commands")
                }}>Process Instructions</Button>
            <Button >Clear </Button>
        </React.Fragment>
    )
}

export default CommandPane