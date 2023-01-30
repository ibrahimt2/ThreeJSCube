import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Typeahead } from 'react-bootstrap-typeahead';

function CommandAdd({cubeMachineState, send}) {

    let availableCommands = ['MOVE TO', 'MOVE BY', 'ROTATE TO', 'ROTATE BY']

    return(
        <Form>
            <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Label>Name</Form.Label>
                    <Typeahead
                    id="basic-typeahead-single"
                    onChange={(e) => {
                        send("Form input changed", {value: e, valueType: 'name'});
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
                        send("Form input changed", {value: e.target.value, valueType: 'x'});
                    }}></Form.Control>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                    <Form.Label>Y</Form.Label>
                    <Form.Control placeholder="Name"
                    value={cubeMachineState.context.formY}
                    onChange={(e) => {
                        send("Form input changed", {value: e.target.value, valueType: 'y'});
                    }}></Form.Control>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                    <Form.Label>Z</Form.Label>
                    <Form.Control placeholder="Name"
                    value={cubeMachineState.context.formZ}
                    onChange={(e) => {
                        send("Form input changed", {value: e.target.value, valueType: 'z'});
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
        </Form>
    )
}

export default CommandAdd
