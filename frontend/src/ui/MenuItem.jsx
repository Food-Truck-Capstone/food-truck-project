import React from "react"
import {Col, Container, Row} from "react-bootstrap";

export function MenuItem() {
    return (
        <>
            <Row>
                <Col sm={1} className={"text-center my-auto order-sm-last"}>
                    <img src={"https://placekitten.com/60/60"} className={"rounded-circle"}/>
                </Col>
                <Col sm={3}>
                    <h5 className={"d-inline"}>Item Name</h5>
                    <h5 className={"d-inline"}> - </h5>
                    <h5 className={"d-inline"}>Item Price</h5>
                    <p> Item Description Lorem Ipsum One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.</p>
                </Col>
            </Row>
        </>
    )
}