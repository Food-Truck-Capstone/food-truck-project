import React from "react";
import {Col, Row} from "react-bootstrap";
import image from "../image/food truck.jpg";
import {TruckBadgeMenuItem} from "./TruckBadgeMenuItem.jsx";


export function TruckBadge () {
    return(
       <>
           <Row className="border border-dark rounded mt-2 ms-0 me-2">
               <Col xs={3} className={"my-auto pt-2 pb-3"}>
                   <img src={image} className="img-fluid" alt="Food Truck Icon"/>
               </Col>
               <Col xs={9} className={"pt-2 my-auto"}>
                   <Row>
                       <Col>
                           <h3>South of the Border</h3>
                           <h5>Mexican</h5>
                           <h5>1.1 Miles Away</h5>
                       </Col>
                   </Row>
               </Col>
               <TruckBadgeMenuItem/>
               <TruckBadgeMenuItem/>
           </Row>
       </>
    )
}


