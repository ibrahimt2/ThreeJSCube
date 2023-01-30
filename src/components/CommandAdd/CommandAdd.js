import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CommandAdd({cubeMachineState, send}) {

    return(
        <Form>
            <Row>
                <Col>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Name"
                    value={cubeMachineState.context.formName}
                    onChange={(e) => {
                        send("Form input changed", {value: e.target.value});
                    }}></Form.Control>
                </Col>
            </Row>
        </Form>
    )
}

export default CommandAdd
