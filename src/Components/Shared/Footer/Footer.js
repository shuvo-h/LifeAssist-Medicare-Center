import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className='pt-4'>
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12}  className="d-flex">
                        <div className="my-auto">
                            <h5>SUBSCRIBE NEWSLETTER</h5>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="email-name@example.com" />
                                    <Button className="news-subscribe-btn d-block mx-auto mt-2 fw-bold" type="submit">Subscribe</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="d-flex flex-column">
                        <h5>QUICK LINKS</h5>
                        <Link to="" className="btn-hover-effect text-white fw-bold">About Us</Link>
                        <Link to="" className="btn-hover-effect text-white fw-bold">Our Doctors</Link>
                        <Link to="" className="btn-hover-effect text-white fw-bold">Gallery</Link>
                        <Link to="" className="btn-hover-effect text-white fw-bold">Blog</Link>
                        <Link to="" className="btn-hover-effect text-white fw-bold">Contact</Link>
                        <Link to="" className="btn-hover-effect text-white fw-bold">Appointment</Link>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="d-flex flex-column">
                        <h5>HELP LINKS</h5>
                        <Link to="" className="btn-hover-effect text-white fw-bold">Departments</Link>
                        <Link to="" className="btn-hover-effect text-white fw-bold">Sponsors</Link>
                        <Link to="" className="btn-hover-effect text-white fw-bold">FAQs</Link>
                        <Link to="" className="btn-hover-effect text-white fw-bold">Emergency Unit</Link>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <h5>CONTACT</h5>
                        <p className="text-white">Pratt AveEl Paso, TX 79936,<br />
                            United States of America</p>
                        <p className="m-0 text-white">Phone Number:	<i>360-885-5159</i>,</p>
                        <p className="m-0 text-white">Email: <i>life-assist.mc-h@lmc.com</i>,</p>
                        <p className="m-0 text-white">Office Hours: <i>08:00am - 20:00pm</i></p>
                    </Col>
                </Row>
            </Container>
                <p className="text-white mt-2 p-2 bg-primary text-center"> &copy; 2022 Copyright by Medico. All rights reserved.</p>
        </footer>
    );
};

export default Footer;