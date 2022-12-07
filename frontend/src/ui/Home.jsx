
import React, {useEffect} from "react"
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import {TruckMap} from "./TruckMap.jsx";
import {TruckBadge} from "./TruckBadge.jsx";
import {fetchAllTruck} from "../store/truck.js";
import {useDispatch, useSelector} from "react-redux";
import {NavigationMenu} from "./NavigationMenu.jsx";
import {fetchAllMenus} from "../store/menus.js";

export function Home() {

    const trucks = useSelector(state => state.truck ? state.truck : [])

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllTruck())
        dispatch(fetchAllMenus())

    }
    useEffect(initialEffects, [dispatch])

    console.log(trucks)


    return (
        <>
        <NavigationMenu/>
            <Container fluid>
                <Row>
                    <Col lg={8} className="align-items-stretch">
                        <TruckMap/>
                    </Col>
                    <Col className="overflow-auto" lg={4} style={{height: '90vh'}} >
                        {trucks.map((truck, index) =>    <TruckBadge truck={truck} key={index}/>)}
                    </Col>
                </Row>
            </Container>
        </>
  )
}