import React from "react";
import {Container, Row} from "react-bootstrap";

export function AddTruck() {
    return (
<>
        <Container>
            <form id="signUpForm">
                <label>
                    <Row id="SignUpText">
                        Truck Name:
                        <input type="text" name="name"/>
                    </Row>
                <Row id="SignUpText">
                    Truck Number (for multiple trucks under same name) :
                    <input type="text" name="truck number"/>
                </Row>
                <Row id="SignUpText">
                    Type of Food:
                    <select name="selectList">
                        <option value="option 1">Option 1</option>
                        <option value="option 2">Option 2</option>
                        <option value="option 3">Option 3</option>
                    </select>
                </Row>
                <Row className="mt-5">
                    Cash ONLY?
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                </Row>
                </label>
                <Row>
                    <input id="truckSubmitButton" type="submit" value="Submit"/>
                </Row>
            </form>
        </Container>
</>
    )
}
