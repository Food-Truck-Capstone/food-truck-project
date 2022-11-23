import React from "react";
import {Container, Row} from "react-bootstrap";
import Switch from "react-switch";

export function OwnerSignUp(){
    return(
        <>
            <Container>
                <form id="signUpForm">
                    <label>
                        <Row id="SignUpText">
                            Truck Brand:
                            <input type="text" name="name"/>
                        </Row>
                        <Row id="SignUpText">
                            Type of Food:
                            <select name="selectList">
                                <option value="option 1">Option 1</option>
                                <option value="option 2">Option 2</option>
                                <option value="option 3">Option 3</option>
                            </select>

                        </Row>
                        <Row id="SignUpText">
                            Password:
                            <input type="password" name="password"/>
                        </Row>
                        <Row id="SignUpText">
                            Confirm Password:
                            <input type="password" name="password"/>
                        </Row>
                        <Row id="SignUpText">
                            Phone:
                            <input type="text" name="phone"/>
                        </Row>
                        <Row id="SignUpText">
                            Email:
                            <input type="text" name="email"/>
                        </Row>
                    </label>
                    <Row>
                        <input id="submitButton" type="submit" value="Submit"/>
                    </Row>
                </form>
            </Container>
        </>
    )
}