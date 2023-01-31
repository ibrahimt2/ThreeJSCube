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
                            Use this pane to send instructions to the cube. First, use the + button to add commands to the command list. Then, press the 'Process Instructions' command to execute the commands. They will be executed in the sequence they were entered.
                            <br></br><br></br>
                            <b>MOVE TO: </b>Move the cube to the given co-ordinates
                            <br></br><br></br>
                            <b>MOVE BY: </b>Change the cube's position by the given amount
                            <br></br><br></br>
                            <b>ROTATE TO: </b>Set the cube's rotation to the given numbers, specified in degrees
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
                    }}><small>PROCESS INSTRUCTIONS</small></Button></Col>
                <Col>
                    <Button variant="info"
                        className='w-100 text-light'
                        onClick={(e) => {
                            send("Clear command list")
                        }}><small>CLEAR</small> </Button>
                </Col>
            </Row>


        </div>
    )
}

export default CommandPane