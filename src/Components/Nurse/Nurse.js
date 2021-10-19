import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nurse.css';

const Nurse = (props) => {
    const {name, email, experience, nrs_img, specialization} = props.nurse || {};
    return (
        <Col lg={4} md={6} sm={12} className="p-3">
            <div  className="nurse-cart p-3 rounded">
                <Row >
                    <Col>
                        <img className="nurse-img img-fluid rounded" src={nrs_img} alt="" />
                    </Col>
                    <Col className="d-lg-flex align-items-end flex-column">
                        <h6>{name}</h6>
                        <p className="m-0">{specialization}</p>
                        <p className="m-0">{email}</p>
                        <p>Experience: <strong>{experience} years</strong></p>
                        <Link to="" className="profile-btn px-4 py-1 mt-auto rounded fw-bold"> Profile</Link>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default Nurse;

