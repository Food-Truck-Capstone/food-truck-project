import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import Map from "react-map-gl";
import {Pin} from "./Pin.jsx";

import {MenuItem} from "./MenuItem.jsx";
import {Menu} from "./Menu.jsx";
import {FoodTruckMap} from "./FoodTruckMap";


export function Home() {

    return (<>
        <Menu/>
            <Container fluid>
                <Row>
                    <Col lg={8} className="align-items-stretch">
                        <FoodTruckMap/>
                    </Col>
                    <Col className="overflow-auto" lg={4} style={{height: '90vh'}} >
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                    </Col>
                </Row>
            </Container>
        </>)
}