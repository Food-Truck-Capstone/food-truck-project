import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {NavigationMenu} from "./NavigationMenu.jsx";
import {FoodTruckMap} from "./FoodTruckMap";
import {TruckBadge} from "./TruckBadge.jsx";


export function Home() {

    return (
        <>
        <NavigationMenu/>
            <Container fluid>
                <Row>
                    <Col lg={8} className="align-items-stretch">
                        <FoodTruckMap/>
                    </Col>
                    <Col className="overflow-auto" lg={4} style={{height: '90vh'}} >
                        <TruckBadge/>
                    </Col>
                </Row>
            </Container>
        </>
  )
}