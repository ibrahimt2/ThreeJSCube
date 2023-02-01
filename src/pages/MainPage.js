import NavigationBar from '../components/NavigationBar';
import ScenePane from '../pages/ScenePane.js'
import CommandPane from './CommandPane.js'
import cubeMachine from '../machines/cubeMachine.js'
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
            <ScenePane position={cubeMachineState.context.position} rotation={cubeMachineState.context.rotation}></ScenePane>
            <CommandPane cubeMachineState={cubeMachineState} send={send}></CommandPane>
        </div>);
}

export default MainPage