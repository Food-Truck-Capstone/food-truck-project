import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import image from "../image/food truck.jpg";
import {TruckBadgeMenuItem} from "./TruckBadgeMenuItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTruck} from "../store/truck.js";
import {fetchAllMenus} from "../store/menus.js";


export function TruckBadge ({truck}) {
    const menus = useSelector(state => {
        console.log(state.menus)
        if (state.menus[truck.truckId] === undefined) {
            return []
        } else {
            return state.menus[truck.truckId]
        }
    })
    console.log(menus)

    return(
       <>
           <Row className="border border-dark rounded mt-2 ms-0 me-2">
               <Col xs={3} className={"my-auto pt-2 pb-3"}>
                   <img src={image} className="img-fluid" alt="Food Truck Icon"/>
               </Col>
               <Col xs={9} className={"pt-2 my-auto"}>
                   <Row>
                       <Col>
                           <h3>{truck.truckName}</h3>
                           <h5>{truck.truckFoodType}</h5>
                       </Col>
                   </Row>
               </Col>
               {menus.map((menu,index)=> <TruckBadgeMenuItem menu={menu} key={index}/>
               )}
           </Row>
       </>
    )
}


