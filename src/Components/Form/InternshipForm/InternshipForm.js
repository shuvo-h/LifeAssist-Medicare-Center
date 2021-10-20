import "./InternshipForm.css";
import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const InternshipForm = () => {
    const {user} = useAuth();
    return (
        <Container className="guest-app-form-container">
        <h4 className="mt-4 text-center"><u>Fill the Application Form for Internship</u></h4>
        <Form className="my-5">
            <Row>
                <Col className="ps-4">
                    <Row className="mb-3">
                    <p className="text-center"><strong>Student's Information</strong></p>
                        <Form.Group as={Col} controlId="fullname">
                        <Form.Label>Students's Full Name</Form.Label>
                        <Form.Control  type="text" placeholder="Enter patient's name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="password" placeholder="Male or Female" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="age in year" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <p className="text-center"><strong>Academic Information</strong></p>
                        <Form.Group as={Col} controlId="fullname">
                        <Form.Label>Students's College/Institute Name</Form.Label>
                        <Form.Control  type="text" placeholder="Enter your previous college name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="gender">
                        <Form.Label>Subject Area</Form.Label>
                        <Form.Control type="text" placeholder="Write your subject name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="age">
                        <Form.Label>Result</Form.Label>
                        <Form.Control type="number/text" placeholder="write your result" />
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={user.email} placeholder="Enter email" readOnly/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Application Date</Form.Label>
                        <Form.Control  value={(new Date()).toLocaleDateString()} placeholder="date" readOnly/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Permanent Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Temporary Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I hereby declare that the information provided is true and correct. I also understand that any willful dishonesty may render for refusal of this application." />
            </Form.Group>

            <Button className="d-block mx-auto" variant="primary" >Apply</Button>
        </Form>
    </Container>
    );
};

export default InternshipForm;