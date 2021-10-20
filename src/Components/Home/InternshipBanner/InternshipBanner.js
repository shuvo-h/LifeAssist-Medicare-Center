import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './internshipBanner.css';

const InternshipBanner = () => {
    return (
        <Row className="my-4 border-bottom">
                    <Col lg={6} className="internship-content p-4">
                    <h4 className="text-center my-2 text-info">Internship Opportunity</h4>
                        <p className="ms-4 mt-4">
                            Nursing internship in LifeAssist Medicare Center is open now. 
                            We only accept intern student who are recommanded by our expert doctors. 
                            Contact with the appropriate doctor with your resume to remommand.
                        </p>
                        <ul>
                            <li className="fs-4 text-primary ms-5 list-style-none">
                                <IconContext.Provider value={{ color: "green", className: "global-class-name me-3" }}><BsFillArrowRightCircleFill /></IconContext.Provider>
                                We provide standard nursing training.
                            </li>
                            <li className="fs-4 text-primary ms-5">
                                <IconContext.Provider value={{ color: "green", className: "global-class-name me-3" }}><BsFillArrowRightCircleFill /></IconContext.Provider>
                                After successfully completing internship, have an opportunity to get job as a junior nurse in our hospital.
                            </li>
                            <li className="fs-4 text-primary ms-5">
                                <IconContext.Provider value={{ color: "green", className: "global-class-name me-3" }}><BsFillArrowRightCircleFill /></IconContext.Provider>
                                Basic necessary equipments will be provided by us.
                            </li>
                        </ul>
                         <p className="text-end">For Internship to join With recommendation <Link to="/internship-form" className="intern-apply-btn  text-decoration-none fs-2 px-2 py-1 rounded border">Apply here</Link></p>
                    </Col>
                    <Col lg={6}>
                        <img className="img-fluid ms-auto d-block p-4 rounded-circle" src="https://i.ibb.co/fkGtRgT/nursing-Internship.jpg" alt="" />
                    </Col>
                </Row>
    );
};

export default InternshipBanner;