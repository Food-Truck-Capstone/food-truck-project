import React from "react"
import {CustomerSignUp} from "./CustomerSignUp";
import {OwnerSignUp} from "./OwnerSignUp";

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <CustomerSignUp/>
            <OwnerSignUp/>
        </>
    )
}