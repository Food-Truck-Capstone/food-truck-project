import React from "react"
import {Col, Row} from "react-bootstrap";


export function MenuItems() {
    return (
        <>
            <Row className="border border-dark rounded mt-2 ms-0 me-2" >
                <Col xs={9} className={"pt-3"}>
                    <Row>
                        <Col>
                            <h5>Carne Asada Tacos - $12.00</h5>
                            <p> Flank or skirt steak, marinated in a mixture of fresh orange and lime juice, oil, jalapeño, cilantro, garlic and seasonings.</p>
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