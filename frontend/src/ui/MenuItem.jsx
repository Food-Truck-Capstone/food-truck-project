import React from "react"
import {Col, Container, Row} from "react-bootstrap";

export function MenuItem() {
    return (
        <>
            <Row className="border border-dark rounded">
                <Col className={"text-center my-auto order-lg-last pt-3"} lg={4}>
                    <img src={"https://placekitten.com/60/60"} className={"rounded-circle"} alt={"kitten"}/>
                </Col>
                <Col lg={8} className="pt-3">
                    <h5 className={"d-inline"}>Item Name</h5>
                    <h5 className={"d-inline"}> - </h5>
                    <h5 className={"d-inline"}>Item Price</h5>
                    <p className="pt-3"> Item Description Lorem Ipsum One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.</p>
                </Col>
            </Row>
        </>
    )
}