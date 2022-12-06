import React from "react";
import {httpConfig} from "../utils/http-config.js";
import * as Yup from "yup";
import {Formik} from "formik";
import {DisplayError} from "./DisplayError.jsx";
import {DisplayStatus} from "./DisplayStatus.jsx";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import {FormDebugger} from "./FormDebugger.jsx";

export const SignUpFormCustomer = () => {
    const signUp = {
        customerEmail: "",
        customerName: "",
        customerPassword: "",
        customerPasswordConfirm: "",
        customerPhone: "",
    };

    const validator = Yup.object().shape({
        customerEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        customerName: Yup.string()
            .required("customer name is required"),
        customerPassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        customerPasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters"),
        customerPhone: Yup.string()
            .max(10, "phone Number is too long")
    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
         const customerPhone = values.customerPhone === "" ? null : values.customerPhone
        httpConfig.post("/apis/sign-up-customer/", {...values, customerPhone})
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };

    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {SignUpFormContent}
        </Formik>

    )
};

function  SignUpFormContent(props){
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <Form>
                <Form.Group className="mb-1" controlId="customerEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <FormControl
                            className="form-control"
                            name="customerEmail"
                            type="text"
                            value={values.customerEmail}
                            placeholder="your@email.you"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"customerEmail"} />
                    <Form.Group className="mb-1" controlId="customerName">
                        <Form.Label>Customer Name</Form.Label>
                        <InputGroup>
                            <FormControl
                                className="form-control"
                                name="customerName"
                                type="text"
                                value={values.customerName}
                                placeholder="Your Name"
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                        </InputGroup>
                        <DisplayError errors={errors} touched={touched} field={"customerName"} />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="customerPhone">
                        <Form.Label>Phone Number (Optional)</Form.Label>
                        <InputGroup>
                            <FormControl
                                className="form-control"
                                name="customerPhone"
                                type="text"
                                value={values.customerPhone}
                                placeholder="(***)***-****"
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                        </InputGroup>
                        <DisplayError errors={errors} touched={touched} field={"customerPhone"} />
                    </Form.Group>

                </Form.Group>
                {/*controlId must match what is defined by the initialValues object*/}
                <Form.Group className="mb-1" controlId="customerPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <FormControl
                            className="form-control"
                            name="customerPassword"
                            type="password"
                            value={values.customerPassword}
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"customerPassword"} />
                </Form.Group>
                <Form.Group className="mb-1" controlId="customerPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                        <FormControl
                            className="form-control"
                            name="customerPasswordConfirm"
                            type="password"
                            value={values.customerPasswordConfirm}
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"customerPasswordConfirm"} />
                </Form.Group>

                <Form.Group className={"mt-3"}>
                    <Button onClick={handleSubmit} className="btn btn-primary">Submit</Button>
                    {" "}
                    <Button
                        className="btn btn-danger"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </Form.Group>
            </Form>
            <FormDebugger{...props}/>
            <DisplayStatus status={status} />

        </>


    )
}