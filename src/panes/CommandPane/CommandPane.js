import CommandRowContainer from '../../components/CommandRowContainer/CommandRowContainer.js'
import React from 'react'

function CommandPane() {
    return (
        <React.Fragment>
            <CommandRowContainer commandArray={[{name: '10', x: 10, y:2, z:4}]}></CommandRowContainer>
        </React.Fragment>
    )
}

export default CommandPane