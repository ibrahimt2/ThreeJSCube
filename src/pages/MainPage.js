import Container from 'react-bootstrap/Container';
import NavigationBar from '../components/NavigationBar';
import ScenePane from '../pages/ScenePane.js'
import CommandPane from './CommandPane.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import cubeMachine from '../machines/cubeMachine.js'
import { useMachine } from '@xstate/react'



/** MainPage.
 *  Display Main Landing Page of application.
 * 
 *  Renders: NavigationBar, ScenePane, CommandPane 
 */

function MainPage() {

    const [cubeMachineState, send] = useMachine(cubeMachine, {
        services: {

            /** Service to process commands currently in commandArray and return calculated position and rotation values */
            processCommands: async (context) => {

                let positionResult = context.position
                let rotationResult = context.rotation
                let commandArray = context.commands

                while (commandArray.length != 0) {
                    let command = commandArray.shift()

                    if (command.name == 'MOVE TO') {
                        // Move the cube to a given position
                        positionResult = [command.x, command.y, command.z]
                    } else if (command.name == 'ROTATE TO') {
                        // Rotate the cube to a given position
                        rotationResult = [command.x, command.y, command.z]
                    } else if (command.name == 'MOVE BY') {
                        // Add command position values to cube's current position
                        positionResult = [positionResult[0] + command.x, positionResult[1] + command.y, positionResult[2] + command.z]
                    } else if (command.name == 'ROTATE BY') {
                        // Add command rotation values to cube's rotation position
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