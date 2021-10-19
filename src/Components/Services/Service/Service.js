import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    const {service_name, service_img, service_id, service_txt } = props.service;
    const shortDescription = service_txt.slice(0,110);
    return (
        <Col md={4} className=" p-4">
            <Row className="service-item p-1 rounded">
                <Col>
                    <img className="img-fluid" src={service_img} alt="" />
                    <Link  className="btn-service-info rounded d-flex justify-content-center mt-1 fw-bold" to={`/service-details/${service_id}`}>See Details</Link >
                </Col>
                <Col>
                    <h5>{service_name}</h5>
                    <p>{shortDescription}.....</p>
                </Col>
            </Row>
        </Col>
    );
};

export default Service;