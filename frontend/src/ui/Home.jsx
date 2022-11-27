import React from "react"
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import {MenuItem} from "./MenuItem.jsx";
import {Menu} from "./Menu.jsx";
import {FoodTruckMap} from "./FoodTruckMap";
import {FoodTruckBadge} from "./FoodTruckBadge.jsx";
import {TruckManagement} from "./TruckManagement.jsx";
import {MenuManagement} from "./MenuManagement.jsx";

export function Home() {

    return (
        <>
        <Menu/>
            <Container fluid>
                <Row>
                    <Col lg={8} className="align-items-stretch">
                        <FoodTruckMap/>
                    </Col>
                    <Col className="overflow-auto" lg={4} style={{height: '90vh'}} >
                        <FoodTruckBadge/>
                    </Col>
                </Row>
            </Container>
            <TruckManagement/>
            <MenuManagement/>

        </>
  )
}