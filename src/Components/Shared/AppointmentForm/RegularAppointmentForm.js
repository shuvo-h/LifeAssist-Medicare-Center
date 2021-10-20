import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './regularAppointmentForm.css';

const RegularAppointmentForm = () => {
    const {user} = useAuth();
    
    return (
        <Container className="reg-app-form-container">
            <h4 className="mt-4 text-center"><u>Fill the Appointment Form</u></h4>
            <Form className="my-5">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="fullname">
                    <Form.Label>Patient's Name</Form.Label>
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
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={user.email} type="email" placeholder="Enter email" readOnly/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Appointment Date</Form.Label>
                    <Form.Control type="date" placeholder="date" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Doctor's Name</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Doctor's list</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose your doctor's name</option>
                        <option>doctor 1</option>
                        <option>doctor 2</option>
                    </Form.Select>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I hereby declare that the information provided is true and correct. I also understand that any willful dishonesty may render for refusal of this appointment." />
                </Form.Group>

                <Button className="d-block mx-auto" variant="primary" >
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default RegularAppointmentForm;

