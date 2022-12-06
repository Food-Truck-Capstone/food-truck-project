import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {SignUpFormOwner} from "./SignUpFormOwner.jsx"

export function SignupOwnerModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div onKeyDown={e => e.stopPropagation()}>
            <Button variant="link" onClick={handleShow}>
                Truck Owner Sign Up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Truck Owner Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpFormOwner/>
                </Modal.Body>
            </Modal>
        </div>
    );
}