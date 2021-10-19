import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useLoadedData from '../../hooks/useLoadedData';
import Service from './Service/Service';

const Services = () => {
    const serviceListUrl = '/life-assist-medicare-services.json';
    const serviceList = useLoadedData(serviceListUrl);
    return (
        <Container className="mt-5 bg-light">
            <h2 className="text-center ">Our Services</h2>
            <hr />
            <Row>
                {
                    serviceList.map(service=><Service service={service} key={service.service_id}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;