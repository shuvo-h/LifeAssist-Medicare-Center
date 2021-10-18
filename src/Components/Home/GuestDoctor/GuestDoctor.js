import React from 'react';
import { Col } from 'react-bootstrap';
import './guestDoctor.css';

const GuestDoctor = (props) => {
    const {credential, img_uri, speciality, title, visit_Time} = props.guestDoctor;
    return (
        <Col className="guest-dr mx-4 p-2 text-center">
            <div>
                <h6 className="m-0">{speciality}</h6>
                <p className="m-0">{visit_Time}</p>
            </div>
            <div>
                <img className="guest-img img-fluid " src={img_uri} alt="" />
            </div>
            <div>
                <h6 className="m-0">{title}</h6>
                <p className="m-0">{credential}</p>
                <button className="btn-primary rounded px-4">Book</button>
            </div>
        </Col>
    );
};

export default GuestDoctor;