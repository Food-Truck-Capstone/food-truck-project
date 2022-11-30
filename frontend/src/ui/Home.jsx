import React, {useEffect} from "react"
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import {Menu} from "./Menu.jsx";
import {FoodTruckMap} from "./FoodTruckMap";
import {FoodTruckBadge} from "./FoodTruckBadge.jsx";
import {fetchAllTruck} from "../store/truck.js";
import {useDispatch, useSelector} from "react-redux";

export function Home() {

    const trucks = useSelector(state => state.truck ? state.truck : [])

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllTruck())
    }
    useEffect(initialEffects, [dispatch])

    console.log(trucks)

    return (
        <>
        <Menu/>
            <Container fluid>
                <Row>
                    <Col lg={8} className="align-items-stretch">
                        <FoodTruckMap/>
                    </Col>
                    <Col className="overflow-auto" lg={4} style={{height: '90vh'}} >
                        {trucks.map((truck, index) =>    <FoodTruckBadge truck={truck} key={index}/>)}
                    </Col>
                </Row>
            </Container>
        </>
  )
}