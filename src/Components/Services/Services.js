import React from 'react';
import { Row } from 'react-bootstrap';
import useLoadedData from '../../hooks/useLoadedData';
import Service from './Service/Service';

const Services = () => {
    const serviceListUrl = '/life-assist-medicare-services.json';
    const serviceList = useLoadedData(serviceListUrl);
    return (
        <div className="mt-5 bg-light">
            <h2 className="text-center ">Our Services</h2>
            <Row>
                {
                    serviceList.map(service=><Service service={service} key={service.service_id}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;