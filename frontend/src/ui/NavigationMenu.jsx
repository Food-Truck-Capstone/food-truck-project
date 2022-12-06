import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {SignupCustomerModal} from "./SignupCustomerModal.jsx";
import {SignupOwnerModal} from "./SignupOwnerModal.jsx";

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
                                <Nav.Link className={"navlink"} href="sign-in">Sign In</Nav.Link>
                                {/*Sign Up Modal*/}
                                <Nav.Link><SignupCustomerModal/></Nav.Link>
                                <Nav.Link><SignupOwnerModal/></Nav.Link>
                                {/*Manage ManageProfileData Screen*/}
                                <Nav.Link className={"navlink"}  href="manage-profile">Manage Profile </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}