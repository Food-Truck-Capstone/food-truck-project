import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {SignInModal} from "./SignInModal.jsx";

export function Menu () {
    return (
        <>
            <Navbar key={false} bg="light" expand={false} className="mb-3">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                    {/*<Navbar.Brand>Food by the Mile</Navbar.Brand>*/}
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-false`} aria-labelledby={`offcanvasNavbarLabel-expand-false`} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link><SignInModal/></Nav.Link>
                                <Nav.Link href="#action2">Option #2</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}