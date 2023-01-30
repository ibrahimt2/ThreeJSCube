import CommandRowContainer from '../../components/CommandRowContainer/CommandRowContainer.js'
import CommandAdd from '../../components/CommandAdd/CommandAdd.js'
import React from 'react'

function CommandPane({cubeMachineState, send}) {
    return (
        <React.Fragment>
            <CommandAdd send={send} cubeMachineState={cubeMachineState}></CommandAdd>
            <CommandRowContainer commandArray={cubeMachineState.context.commands}></CommandRowContainer>
        </React.Fragment>
    )
}

export default CommandPane