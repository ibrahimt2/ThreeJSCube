import CommandRowContainer from '../components/CommandRowContainer.js'
import CommandAdd from '../components/CommandAdd.js'
import Button from 'react-bootstrap/esm/Button.js'
import React from 'react'
import information from '../images/information.svg'
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'


/**
 *  CommandPane.
 *  
 *  Displays heading and tooltip containing tutorial on how to use Command Manager Pane
 *  Creates 'Process Instructions' button that executes commands currently in list
 *  Creates 'Clear' button that removes all commands currently in list
 *  
 *  Renders: CommandAdd, CommandRowContainer
 *  Rendered By: MainPage
 * 
 */

function CommandPane({ cubeMachineState, send }) {
    return (
        <div className='shadow p-3 m-2 mx-5 bg-white rounded'>
            <Row>

                {/* Displays heading and tooltip */}
                <Col><h1>Command Manager<OverlayTrigger
                    key={'right'}
                    placement={'right'}
                    overlay={
                        <Tooltip id={`tooltip-${'right'}`}>
                            Use this pane to send instructions to the cube. 
                            <br></br><br></br>
                            <b>Sending Single Command: </b> Enter command in text fields and click 'Quick Execute'
                            <br></br><br></br>
                            <b>Execute command list: </b> Fill command list by entering commands in text fields and click '+'. Repeat until list is built. Then, click 'Execute List Instructions' 
                            <br></br><br></br>
                            <b>MOVE TO: </b>Move the cube to the given coordinates. Overwrites previous effects
                            <br></br><br></br>
                            <b>MOVE BY: </b>Change the cube's position by the given amount
                            <br></br><br></br>
                            <b>ROTATE TO: </b>Set the cube's rotation to the given numbers, specified in degrees. Overwrites previous effects
                            <br></br><br></br>
                            <b>ROTATE BY: </b>Change the cube's rotation by the given amount, specified in degrees
                        </Tooltip>
                    }
                >
                    <Button variant=""><img src={information} alt="React Logo" width='20em' height='20em' /></Button>
                </OverlayTrigger></h1 ></Col>

            </Row>
            <CommandAdd send={send} cubeMachineState={cubeMachineState}></CommandAdd>
            <CommandRowContainer commandArray={cubeMachineState.context.commands}></CommandRowContainer>
            <Row>
                <Col> <Button className='w-100 text-light' variant="info"
                    onClick={(e) => {
                        send("Process list commands")
                    }}><small>EXECUTE INSTRUCTION LIST</small></Button></Col>
                <Col>
                    <Button variant="info"
                        className='w-100 text-light'
                        onClick={(e) => {
                            send("Clear command list")
                        }}><small>CLEAR INSTRUCTION LIST</small> </Button>
                </Col>
            </Row>


        </div>
    )
}

export default CommandPane