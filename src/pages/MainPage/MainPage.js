import Container from 'react-bootstrap/Container';
import NavigationBar from '../../components/NavigationBar/NavigationBar.js';
import ScenePane from '../../panes/ScenePane/ScenePane'
import CommandPane from '../../panes/CommandPane/CommandPane.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import cubeMachine from '../../machines/cubeMachine.js'
import { useMachine } from '@xstate/react'



/** MainPage.
 *  Display Main Landing Page of application.
 * 
 *  Renders: NavigationBar, ScenePane, CommandPane 
 */

function MainPage() {

    const [cubeMachineState, send] = useMachine(cubeMachine)

    return (
        <div>
            <NavigationBar></NavigationBar>
            <ScenePane></ScenePane>
            {JSON.stringify(cubeMachineState.context)}
            <CommandPane cubeMachineState={cubeMachineState} send={send}></CommandPane>
        </div>);
}

export default MainPage