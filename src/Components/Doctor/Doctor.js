import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './doctor.css';

const Doctor = (props) => {
    const {name, fees, doc_img, designation} = props.doctor || {};
    return (
        <Col lg={4} md={6} sm={12} className="p-3">
            <div  className="doctor-cart p-3 rounded">
                <Row >
                    <Col>
                        <img className="doctor-img img-fluid rounded" src={doc_img} alt="" />
                    </Col>
                    <Col>
                        <h6>{name}</h6>
                        <p>{designation}</p>
                        <p><strong>Fees: ${fees}</strong></p>
                    </Col>
                </Row>
                <div className="d-flex justify-content-around mt-3">
                    <Link to="" className="appointment-profile-btn px-4 py-1 rounded fw-bold">Appointment</Link>
                    <Link to="" className="appointment-profile-btn px-4 py-1 rounded fw-bold">Profile</Link>
                </div>
            </div>
        </Col>
    );
};

export default Doctor;



