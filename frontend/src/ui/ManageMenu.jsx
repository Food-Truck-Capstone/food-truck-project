import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ManageMenuItems} from "./ManageMenuItems";

export function ManageMenu() {


    return (
        <>
            <Container>
                <Row className={"text-center m-5"}><h1>Menu</h1></Row>
                <Row>
                    <Col md={1} className={"text-center"}><h5>Select</h5></Col>
                    <Col md={2} className={"text-center"}><h5>Item Name</h5></Col>
                    <Col md={4} className={"text-center"}><h5>Description</h5></Col>
                    <Col md={2} className={"text-center"}><h5>Item Price</h5></Col>
                    <Col md={3} className={"text-center"}><h5>Apply to All Trucks?</h5></Col>
                </Row>
            <ManageMenuItems/>
            </Container>
        </>
    );
}