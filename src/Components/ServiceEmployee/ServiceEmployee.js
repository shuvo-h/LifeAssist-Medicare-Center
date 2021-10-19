import React from 'react';
import { Col } from 'react-bootstrap';
import './serviceEmployee.css';

const ServiceEmployee = (props) => {
    const {name, img, email, mob} = props.employee;
    return (
        <Col lg={6}>
            <div>
                <img className="employee-img img-fluid" src={img} alt="" />
            </div>
            <div>
                <p><strong>{name}</strong></p>
                {
                    email && <p className="mb-0">Email: <i>{email}</i></p>
                }
                {
                    mob && <p >Mobile: <i>{mob}</i></p>
                }
            </div>
        </Col>
    );
};

export default ServiceEmployee;