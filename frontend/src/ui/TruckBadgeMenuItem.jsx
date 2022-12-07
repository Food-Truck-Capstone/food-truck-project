import React from "react"
import {Col, Row} from "react-bootstrap";


export function TruckBadgeMenuItem({menu}) {
    return (
        <>
            <Row className="rounded mt-2 ms-0 me-2" >
                <Col xs={9} className={"pt-3"}>
                    <Row>
                        <Col>
                            <h5>{menu.menuName}</h5>
                            <h5>{menu.menuPrice}</h5>
                            <p> {menu.menuDescription}</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={3} className={"my-auto pt-3 pb-3"}>
                    <img src={"https://placekitten.com/100/100"} className="img-fluid rounded-circle text-center align-items-center" alt="Food Truck Icon"/>
                </Col>
            </Row>
        </>
    )
}