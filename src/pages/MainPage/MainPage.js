import Container from 'react-bootstrap/Container';
import NavigationBar from '../../components/NavigationBar';



/**
 * Renders Main Landing Page of application.
 * @returns 
 */

function MainPage() {
    return (
        <>
         <NavigationBar></NavigationBar>
         <Container className="bg-secondary m-3 p-2 h-100 w-100" ></Container>
        </>);
}

export default MainPage