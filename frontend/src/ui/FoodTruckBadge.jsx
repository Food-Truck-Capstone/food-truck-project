import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import image from "../image/food truck.jpg";
import image1 from "../image/heart.jpg";
import image2 from "../image/locataion.png";
import {MenuItem} from "./MenuItem";
import {MenuItems} from "./MenuItems";


export function FoodTruckBadge () {
    return(
       <>
           {/*<Container  className="text-left border border-secondary  border-dark rounded  ">*/}
           {/*    <Row className="  justify-content-center m-3 p-3">*/}
           {/*        <Col md={3} className= "mt-3">*/}
           {/*            <img src={image} className = "img-fluid" alt="400x400"*/}
           {/*                 width="400"*/}
           {/*                 height="400"/>*/}
           {/*        </Col>*/}
           {/*        <Col md={7} className=" text-center col-sm-9 p-3">*/}
           {/*            <h1 className= "d-flex justify-content-center p-4" > Sanchez Tacos </h1>*/}
           {/*            <p>Type of Food</p>*/}
           {/*            <p> Distance </p>*/}
           {/*            <p> Description </p>*/}
           {/*        </Col>*/}
           {/*        <Col md={2} className= "">*/}
           {/*            <Col className="m-3">*/}
           {/*                <img src={image1} className = "mx-3  img-fluid" alt="100x100"*/}
           {/*                     width="100"*/}
           {/*                     height="100"/>*/}
           {/*            </Col>*/}
           {/*            <Col className="m-3">*/}
           {/*                <img src={image2} className = "mx-3  img-fluid" alt="100x100"*/}
           {/*                     width="100"*/}
           {/*                     height="100"/>*/}
           {/*            </Col>*/}
           {/*        </Col>*/}
           {/*    </Row>*/}
           {/*    <MenuItem/>*/}
           {/*</Container>*/}

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
               <MenuItems/>
               <MenuItems/>
           </Row>

       </>
    )
}


