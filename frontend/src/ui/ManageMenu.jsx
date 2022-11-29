import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ManageMenuItems} from "./ManageMenuItems";

export function ManageMenu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="link" onClick={handleShow}>
                Add/Edit Menu
            </Button>

            <Modal show={show} onHide={handleClose} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Manage Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid className={"text-center"}>
                        <Row>
                            <Col md={1}><h5>Select</h5></Col>
                            <Col md={2}><h5>Item Name</h5></Col>
                            <Col md={4}><h5>Item Description</h5></Col>
                            <Col md={2}><h5>Item Price</h5></Col>
                            <Col md={2}><h5>Apply All?</h5></Col>
                            <Col md={1}></Col>
                        </Row>
                        {/*Insert NavigationMenu Items Here*/}
                        <ManageMenuItems/>
                        <ManageMenuItems/>
                        <ManageMenuItems/>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}