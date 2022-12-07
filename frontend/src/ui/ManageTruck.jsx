import React, {useEffect} from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {ManageTruckData} from "./ManageTruckData";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTruck, fetchTrucksByOwnerId} from "../store/truck.js";
import {fetchAuth} from "../store/auth.js";
import {ManageMenuItems} from "./ManageMenuItems.jsx";

export function ManageTruck() {
    const trucks = useSelector((state) => state.truck ? state.truck : [])
    const dispatch = useDispatch()
    const initialEffects = () => {

        dispatch(fetchTrucksByOwnerId())
    }
    console.log(trucks)
    useEffect(initialEffects, [dispatch])
    return (
        <>
            <Container>
                <Row  className="mb-3">
                    <Col md={1} className={"text-center"}><h5>Select</h5></Col>
                    <Col md={1} className={"text-center"}><h5>Truck #</h5></Col>
                    <Col md={3} className={"text-center"}><h5>Truck Name</h5></Col>
                    <Col md={2} className={"text-center"}><h5>Truck Type</h5></Col>
                    <Col md={2} className={"text-center"}><h5>Card Accepted</h5></Col>
                    <Col md={1}></Col>
                    <Col md={2} className={"menu text-center"}><h5>Menu</h5></Col>
                </Row>

                {trucks.map(truck => <ManageTruckData truck={truck} key={truck.truckId}/>)}

                <Col className={"text-center mb-3"}>
                    <Button href={"#"} id="ButtonBackgroundColor">+</Button>
                </Col>

            </Container>
        </>
    )
}