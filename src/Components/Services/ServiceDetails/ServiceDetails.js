import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useLoadedData from '../../../hooks/useLoadedData';
import './serviceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const allServicesUrl = '/life-assist-medicare-services.json';
    const allServices = useLoadedData(allServicesUrl);

    const selectedService = allServices.find(service=>service.service_id === serviceId) || {};
    const {service_dept, service_fees, service_img, service_manager, service_name, service_txt} = selectedService;

    return (
        <Container className="mt-5">
            <h2 className="text-center py-4 bg-light" >{service_name}</h2>
            <Row>
                <Col>
                    <div>
                        <p>Department: {service_dept}</p>
                        <p><strong>Service Fees: <span className="fs-2 text-primary">${service_fees}</span></strong></p>
                        <p className="text-danger fw-bolder">Show doctors list of this department</p>
                    </div>
                </Col>
                <Col>
                    
                    <p>
                        <img src={service_img} className="service-details-img" alt="" />
                        {service_txt}
                    </p>
                    <p><strong>{service_manager}</strong>, <br /> Manager of {service_dept}, <br /> LifeAssist Medicare Center</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;