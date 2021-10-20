import React from 'react';
import './PersonalAppointmentForm.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useLoadedData from '../../hooks/useLoadedData';

const PersonalAppointmentForm = () => {
    const {doctorId} = useParams();
    
    const allDoctors = useLoadedData('/doctors-database.json');
    const appointmentDoctor = allDoctors.find(doctor=> doctor.doc_id === doctorId);
    const {name, doc_img, mob, email, fees, serv_area} = appointmentDoctor || {};
    return (
        <Container className="personal-app-form-container">
            <h4 className="mt-4 text-center"><u>Fill the Appointment Form</u></h4>
            <Form className="my-5">
                <Row>
                    <Col className="mb-3 pe-4">
                        <p className="text-center"><strong>Doctors' Information</strong></p>
                            <Row className="mt-5">
                                <Col className="text-center">
                                    <h5>{name}</h5>
                                    <p><i>{serv_area}</i></p>
                                    <p>Mobile: {mob}</p>
                                    <p>Email: {email}</p>
                                </Col>
                                <Col>
                                    <img className="personal-form-img d-block mx-auto rounded p-2 border" src={doc_img} alt="" />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label={`You are filling an appointment form for ${ name }.`} />
                </Form.Group>
                    </Col>
                    <Col className="ps-4">
                        <Row className="mb-3">
                        <p className="text-center"><strong>Patients' Information</strong></p>
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
                            <Form.Control type="email" placeholder="Enter email" />
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
                    </Col>
                </Row>

                <Form.Group className="mb-3 d-flex justify-content-center fs-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label={`Fees Paid: ${fees}`} />
                </Form.Group>
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

export default PersonalAppointmentForm;