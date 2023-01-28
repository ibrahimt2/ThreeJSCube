import Container from 'react-bootstrap/Container';
import NavigationBar from '../../components/NavigationBar';
import ScenePane from '../../components/ScenePane/ScenePane'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



/**
 * Renders Main Landing Page of application.
 * @returns 
 */

function MainPage() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <ScenePane></ScenePane>

        </>);
}

export default MainPage