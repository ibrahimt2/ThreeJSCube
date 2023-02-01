import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Typeahead } from 'react-bootstrap-typeahead';
import { availableCommands } from '../utils/constant';

/** CommandAdd.
 * 
 *  Creates input fields to select Command, X, Y and Z values for adding new commands in the command list. 
 *  Creates 'Add Command' button to add command to command list 
 *  Creates 'Quick Execute' button command to execute the values in input field
 *  Displays error messages in the case of bad inputs
 *  Handles sending events to to cubeStateMachine to handle 'Add Command' and 'Quick Execute' actions
 * 
 *  Rendered By: CommandPane
 * 
 */

function CommandAdd({ cubeMachineState, send }) {

    return (
        <div className='bg-light p-3 my-2 rounded'>
            <Form>
                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        {/* Command selection dropdown */}
                        <Form.Label><small>COMMAND</small></Form.Label>
                        <Form.Select aria-label="Select Command" onChange={(e) => {
                            send("Form input changed", { value: e.target.value, valueType: 'name' });
                        }}>
                            <option value="MOVE TO">MOVE TO</option>
                            <option value="MOVE BY">MOVE BY</option>
                            <option value="ROTATE TO">ROTATE TO</option>
                            <option value="ROTATE BY">ROTATE BY</option>
                        </Form.Select>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        {/* X text field */}
                        <Form.Label><small>X</small></Form.Label>
                        <Form.Control placeholder="X"
                            value={cubeMachineState.context.formX}
                            onChange={(e) => {
                                send("Form input changed", { value: e.target.value, valueType: 'x' });
                            }}></Form.Control>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        {/* Y text field */}
                        <Form.Label><small>Y</small></Form.Label>
                        <Form.Control placeholder="Y"
                            value={cubeMachineState.context.formY}
                            onChange={(e) => {
                                send("Form input changed", { value: e.target.value, valueType: 'y' });
                            }}></Form.Control>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        {/* Z text field */}
                        <Form.Label><small>Z</small></Form.Label>
                        <Form.Control placeholder="Z"
                            value={cubeMachineState.context.formZ}
                            onChange={(e) => {
                                send("Form input changed", { value: e.target.value, valueType: 'z' });
                            }}></Form.Control>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        {/* Add command button */}
                        <Row><Form.Label><small>ADD COMMAND</small></Form.Label></Row>
                        <Button
                            className="text-light w-100"
                            variant="info"
                            onClick={(e) => {
                                send("Add Command")
                            }}
                        >
                            +
                        </Button>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        {/* Quick execute button */}
                        <Row><Form.Label><small>QUICK EXECUTE</small></Form.Label></Row>
                        <Button
                            className="text-light w-100"
                            variant="info"
                            onClick={(e) => {
                                send("Clear command list")
                                send("Add Command")
                                send("Process list commands")
                            }}
                        >
                            &gt;
                        </Button>
                    </Col>
                </Row>
                <div class="text-danger my-2"><small>{cubeMachineState.context.error}</small></div>
            </Form>
        </div>
    )
}

export default CommandAdd
