import CommandRowContainer from '../../components/CommandRowContainer/CommandRowContainer.js'
import CommandAdd from '../../components/CommandAdd/CommandAdd.js'
import React from 'react'

function CommandPane({cubeMachineState, send}) {
    return (
        <React.Fragment>
            <CommandAdd send={send} cubeMachineState={cubeMachineState}></CommandAdd>
            <CommandRowContainer commandArray={[{name: '10', x: 10, y:2, z:4}]}></CommandRowContainer>
        </React.Fragment>
    )
}

export default CommandPane