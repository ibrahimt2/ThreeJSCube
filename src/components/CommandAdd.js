import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Typeahead } from 'react-bootstrap-typeahead';
import { availableCommands } from '../utils/constant';

/** CommandAdd.
 * 
 *  Handles input fields for adding new commands in commandList. 
 *  Sends events to to cubeStateMachine to add new commands
 * 
 *  Rendered By: CommandPane
 * 
 */

function CommandAdd({ cubeMachineState, send }) {

    return (
        <div className='bg-light p-3 my-2 rounded'>
            <Form>
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
                        <Form.Label>Command</Form.Label>
                        <Typeahead
                            id="basic-typeahead-single"
                            onChange={(e) => {
                                send("Form input changed", { value: e, valueType: 'name' });
                            }}
                            options={availableCommands}
                            placeholder='Select Command'
                            selected={cubeMachineState.context.formName}>
                        </Typeahead>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        <Form.Label>X</Form.Label>
                        <Form.Control placeholder="Name"
                            value={cubeMachineState.context.formX}
                            onChange={(e) => {
                                send("Form input changed", { value: e.target.value, valueType: 'x' });
                            }}></Form.Control>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        <Form.Label>Y</Form.Label>
                        <Form.Control placeholder="Name"
                            value={cubeMachineState.context.formY}
                            onChange={(e) => {
                                send("Form input changed", { value: e.target.value, valueType: 'y' });
                            }}></Form.Control>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        <Form.Label>Z</Form.Label>
                        <Form.Control placeholder="Name"
                            value={cubeMachineState.context.formZ}
                            onChange={(e) => {
                                send("Form input changed", { value: e.target.value, valueType: 'z' });
                            }}></Form.Control>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                        <Row><Form.Label>Add</Form.Label></Row>
                        <Button
                            className="btnFormSend float-down btn-flat"
                            variant="primary"
                            onClick={(e) => {
                                send("Add Command")
                            }}
                        >
                            +
                        </Button>
                    </Col>
                </Row>
                <div class="text-danger self-align-start m-2"><small>{cubeMachineState.context.error}</small></div> 
            </Form>
        </div>
    )
}

export default CommandAdd
