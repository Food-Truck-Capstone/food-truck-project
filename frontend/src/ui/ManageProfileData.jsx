import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col} from "react-bootstrap";

//This page will get the current users data and display it so that they can update it if they need to.
export function ManageProfileData () {
    return (
        <>
            <Col sm={6} className="mx-auto">
                <Form className="">
                    <Form.Group className="mb-3" controlId="userName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="John Smith" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userPhoneNumber">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="505.555.5555" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="tel" placeholder="sample@email.com" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Edit
                    </Button>
                </Form>
            </Col>

        </>
        )
}