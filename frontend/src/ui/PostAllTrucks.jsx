import { Card, Col } from 'react-bootstrap'
import React from 'react'

export function PostAllTrucks ({truck}) {
    console.log(truck)
    const {truck_id, truck_owner_id, truck_name, truck_card_accepted, truck_food_type, truck_lat, truck_lng} = foodtruck
    return (
        <>
            <Col>
                <h5>truck_id</h5>
                <h5>truck_owner_id</h5>
                <h5>truck_name</h5>
                <h5>truck_card_accepted</h5>
                <h5>truck_food_type}</h5>
                <h5>truck_lat</h5>
                <h5>truck_lng</h5>
            </Col>
            <Col>
                <h1>{truck_id}</h1>
                <h1>{truck_owner_id}</h1>
                <h1>{truck_name}</h1>
                <h1>{truck_card_accepted}</h1>
                <h1>{truck_food_type}</h1>
                <h1>{truck_lat}</h1>
                <h1>{truck_lng}</h1>
            </Col>
        </>
    )
}