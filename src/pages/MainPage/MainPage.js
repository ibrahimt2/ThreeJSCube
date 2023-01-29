import Container from 'react-bootstrap/Container';
import NavigationBar from '../../components/NavigationBar/NavigationBar.js';
import ScenePane from '../../panes/ScenePane/ScenePane'
import CommandPane from '../../panes/CommandPane/CommandPane.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



/**
 * Renders Main Landing Page of application.
 * @returns 
 */

function MainPage() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <ScenePane></ScenePane>
            <CommandPane></CommandPane>

        </div>);
}

export default MainPage