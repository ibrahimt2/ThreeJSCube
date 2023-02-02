import ScenePane from '../pages/ScenePane.js'
import CommandPane from './CommandPane.js'
import cubeMachine from '../machines/cubeMachine.js'
import { useMachine } from '@xstate/react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



/** MainPage.
 *  Display Main Landing Page of application.
 * 
 *  Renders: NavigationBar, ScenePane, CommandPane 
 *  Rendered By: App.js
 */

function MainPage() {

    const [cubeMachineState, send] = useMachine(cubeMachine)

    return (
        <div>
            <Navbar bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><b>The Cube Command Centre</b></Navbar.Brand>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>
            <ScenePane position={cubeMachineState.context.position} rotation={cubeMachineState.context.rotation}></ScenePane>
            <CommandPane cubeMachineState={cubeMachineState} send={send}></CommandPane>
        </div>);
}

export default MainPage