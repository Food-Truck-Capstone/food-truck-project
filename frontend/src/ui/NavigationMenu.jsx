import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {SignupCustomerModal} from "./SignupCustomerModal.jsx";
import {SignupOwnerModal} from "./SignupOwnerModal.jsx";
import image from "../image/food truck no background .png"

export function NavigationMenu () {
    return (
        <>
            <Navbar key={false} expand={false} className="mb-3" id={"NavBarBackground"}>
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                    <Navbar.Brand id={"navBarText"}>FOOD BY THE MILE</Navbar.Brand>
                    <img
                        src={image}
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-false`} aria-labelledby={`offcanvasNavbarLabel-expand-false`} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className={"navlink"} href="/">Home</Nav.Link>
                                <SignupCustomerModal/>
                                <SignupOwnerModal/>
                                <Nav.Link className={"navlink"} href="sign-in">Sign In</Nav.Link>
                                <Nav.Link className={"navlink"}  href="manage-profile">Manage Profile </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}