import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './equipment.css';

const Equipment = (props) => {
    const {equip_name, equip_img, imported, imported_year, incharge, price, text} = props.equipment;

    const cartText = text.slice(0, 100);

    return (
        <Col lg={6} md={12} className="px-4 py-3">
            <Row className="equipment-card p-2">
                <Col>
                    <p><strong>{equip_name}</strong>(Imported from {imported}, {imported_year})</p>
                    <p><strong>Incharge: {incharge}</strong></p>
                    <p>{cartText}.....</p>
                    <Link to="" className="bg-light rounded">See Details</Link>
                </Col>
                <Col>
                    <img className=" img-fluid rounded" src={equip_img} alt="" />
                </Col>
            </Row>
        </Col>
    );
};

export default Equipment;