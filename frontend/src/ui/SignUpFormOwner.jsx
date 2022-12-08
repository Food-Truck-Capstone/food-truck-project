import React from "react";
import {httpConfig} from "../utils/http-config.js";
import * as Yup from "yup";
import {Formik} from "formik";
import {DisplayError} from "./DisplayError.jsx";
import {DisplayStatus} from "./DisplayStatus.jsx";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'

export const SignUpFormOwner = () => {
    const signUp = {
        ownerEmail: "",
        ownerName: "",
        ownerPassword: "",
        ownerPasswordConfirm: "",
        ownerPhone: "",
    };

    const validator = Yup.object().shape({
        ownerEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        ownerName: Yup.string()
            .required("owner name is required"),
        ownerPassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        ownerPasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters"),
        ownerPhone: Yup.string()
            .max(10, "phone Number is too long")
    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up-owner/", values)
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
                <Form.Group className="mb-1" controlId="ownerEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <FormControl
                            className="form-control"
                            name="ownerEmail"
                            type="text"
                            value={values.ownerEmail}
                            placeholder="your@email.you"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"ownerEmail"} />
                    <Form.Group className="mb-1" controlId="ownerName">
                        <Form.Label>Name</Form.Label>
                        <InputGroup>
                            <FormControl
                                className="form-control"
                                name="ownerName"
                                type="text"
                                value={values.ownerName}
                                placeholder="Your Name"
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                        </InputGroup>
                        <DisplayError errors={errors} touched={touched} field={"ownerName"} />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="ownerPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <InputGroup>
                            <FormControl
                                className="form-control"
                                name="ownerPhone"
                                type="text"
                                value={values.ownerPhone}
                                placeholder="(***)***-****"
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                        </InputGroup>
                        <DisplayError errors={errors} touched={touched} field={"ownerPhone"} />
                    </Form.Group>

                </Form.Group>
                {/*controlId must match what is defined by the initialValues object*/}
                <Form.Group className="mb-1" controlId="ownerPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <FormControl
                            className="form-control"
                            name="ownerPassword"
                            type="password"
                            value={values.ownerPassword}
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"ownerPassword"} />
                </Form.Group>
                <Form.Group className="mb-1" controlId="ownerPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                        <FormControl
                            className="form-control"
                            name="ownerPasswordConfirm"
                            type="password"
                            value={values.ownerPasswordConfirm}
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"ownerPasswordConfirm"} />
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
            <DisplayStatus status={status} />

        </>


    )
}