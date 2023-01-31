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

    const [cubeMachineState, send] = useMachine(cubeMachine, {
        services: {
            processCommands: async (context) => {

                let positionResult = context.position
                let rotationResult = context.rotation
                let commandArray = context.commands

                while (commandArray.length != 0) {
                    let command = commandArray.shift()

                    if (command.name == 'MOVE TO') {
                        positionResult = [command.x, command.y, command.z]
                    } else if (command.name == 'ROTATE TO') {
                        rotationResult = [command.x, command.y, command.z]
                    } else if (command.name == 'MOVE BY') {
                        positionResult = [positionResult[0] + command.x, positionResult[1] + command.y, positionResult[2] + command.z]
                    } else if (command.name == 'ROTATE BY') {
                        rotationResult = [rotationResult[0] + command.x, rotationResult[1] + command.y, rotationResult[2] + command.z]
                    }
                }

                return [positionResult, rotationResult]
            }
        }
    })

    return (
        <div>
            <NavigationBar></NavigationBar>
            <ScenePane position={cubeMachineState.context.position} rotation={cubeMachineState.context.rotation}></ScenePane>
            <CommandPane cubeMachineState={cubeMachineState} send={send}></CommandPane>
        </div>);
}

export default MainPage