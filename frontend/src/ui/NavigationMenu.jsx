import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {SignInModal} from "./SignInModal.jsx";
import {SignupOwnerModal} from "./SignupOwnerModal.jsx";
import {SignupCustomerModal} from "./SignupCustomerModal.jsx";

export function NavigationMenu () {
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
                               {/*Sign In Modal*/}
                                <Nav.Link><SignInModal/></Nav.Link>
                                {/*Sign Up Modals*/}
                                <Nav.Link><SignupOwnerModal/></Nav.Link>
                                <Nav.Link><SignupCustomerModal/></Nav.Link>
                                {/*Manage ManageProfileData Screen*/}
                                <Nav.Link href="manage-profile">Manage Profile </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}