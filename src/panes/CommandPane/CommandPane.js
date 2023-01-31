import CommandRowContainer from '../../components/CommandRowContainer/CommandRowContainer.js'
import CommandAdd from '../../components/CommandAdd/CommandAdd.js'
import Button from 'react-bootstrap/esm/Button.js'
import React from 'react'
import information from '../../images/information.svg'
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'


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
        <div className='shadow p-3 m-2 mx-5 bg-white rounded'>
            <Row>
                <Col><h1>Command Manager<OverlayTrigger
                    key={'right'}
                    placement={'right'}
                    overlay={
                        <Tooltip id={`tooltip-${'right'}`}>
                        </Tooltip>
                    }
                >
                    <Button variant=""><img src={information} alt="React Logo" width='20em' height='20em' /></Button>
                </OverlayTrigger></h1 ></Col>

            </Row>
            <CommandAdd send={send} cubeMachineState={cubeMachineState}></CommandAdd>
            <CommandRowContainer commandArray={cubeMachineState.context.commands}></CommandRowContainer>
            <Row>
                <Col> <Button className='w-100' variant="primary"
                    onClick={(e) => {
                        send("Process list commands")
                    }}>Process Instructions</Button></Col>
                <Col>
                    <Button className='w-100'>Clear </Button>
                </Col>
            </Row>


        </div>
    )
}

export default CommandPane