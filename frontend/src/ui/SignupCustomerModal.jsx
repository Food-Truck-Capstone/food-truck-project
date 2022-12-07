import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {SignUpFormCustomer} from "./SignUpFormCustomer.jsx";

export function SignupCustomerModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div onKeyDown={e => e.stopPropagation()}>
            <Button variant="link" onClick={handleShow}>
                Customer Sign Up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpFormCustomer/>
                </Modal.Body>
            </Modal>
        </div>
    );
}