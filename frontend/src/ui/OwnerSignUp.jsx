import React from "react";
import {Container, Row} from "react-bootstrap";


export function OwnerSignUp() {
    return (
        <>
            <Container>
                <form id="signUpForm">
                    <label>

                        <Row id="SignUpText">
                            Owner Email:
                            <input type="text" name="name"/>
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
                        <Row id="SignUpText" className="mb-5">
                            Email:
                            <input type="text" name="email"/>
                        </Row>
                    </label>
                    <Row>
                        <input id="ownerSubmitButton" type="submit" value="Submit"/>
                    </Row>
                </form>
            </Container>

        </>
    )
}