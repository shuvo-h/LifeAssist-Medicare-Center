import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './guestDoctor.css';

const GuestDoctor = (props) => {
    const {id, credential, img_uri, speciality, title, visit_Time} = props.guestDoctor;
    return (
        <Col  lg={3} sm={12} className=" guest-dr mx-lg-4 p-2 text-center">
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
                <Link to={`/guest-appointment-form/${id}`} className="btn-primary rounded px-4">Book</Link>
            </div>
        </Col>
    );
};

export default GuestDoctor;