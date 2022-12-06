import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ManageMenuItems} from "./ManageMenuItems";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllMenus} from "../store/menus.js";
import {TruckBadge} from "./TruckBadge.jsx";

export function ManageMenu() {
    let { truckId } = useParams();

    const menus = useSelector((state) => state.menus[truckId] ? state.menus[truckId] : [])
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllMenus())
    }
    useEffect(initialEffects, [dispatch])

    console.log(menus)


    return (
        <>
            <Container>
                <Row className={"text-center m-5"}><h1>Menu</h1></Row>
                <Row>
                    <Col md={1} className={"text-center"}><h5>Select</h5></Col>
                    <Col md={2} className={"text-center"}><h5>Item Name</h5></Col>
                    <Col md={4} className={"text-center"}><h5>Description</h5></Col>
                    <Col md={2} className={"text-center"}><h5>Item Price</h5></Col>
                    <Col md={3} className={"text-center"}><h5>Apply to All Trucks?</h5></Col>
                </Row>
                {/*{menus && menus.map((menuItem) => `<p>{{menuItem.name}}</p>`)}*/}
                {/*{trucks.map((truck, index) =>    <TruckBadge truck={truck} key={index}/>)}*/}
                {menus.map(menu => <ManageMenuItems menuItem={menu} key={menu.menuId}/>)}
            </Container>
        </>
    );
}