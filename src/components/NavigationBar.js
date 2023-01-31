import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


/**
 * Creates a basic Navbar 
 * 
 * Rendered By: MainPage
 */

function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">The Cube Command Centre</Navbar.Brand>
                    <Nav className="me-auto">
       
                    </Nav>
                </Container>
            </Navbar>
        </>);
}

export default NavigationBar