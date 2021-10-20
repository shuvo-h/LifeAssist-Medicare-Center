import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './equipment.css';

const Equipment = (props) => {
    const {equip_id, equip_name, equip_img, imported, imported_year, incharge, text} = props.equipment;

    const cartText = text.slice(0, 100);

    return (
        <Col lg={6} md={6} sm={12} className="px-4 py-3">
            <Row className="equipment-card p-2">
                <Col lg={6} md={12}>
                    <img className=" img-fluid rounded" src={equip_img} alt="" />
                </Col>
                <Col lg={6} md={12}>
                    <p><strong>{equip_name}</strong>(Imported from {imported}, {imported_year})</p>
                    <p><strong>Incharge: {incharge}</strong></p>
                    <p>{cartText}.....</p>
                    <Link to={`/laboratory/${equip_id}`} className="bg-light rounded">See Details</Link>
                </Col>
            </Row>
        </Col>
    );
};

export default Equipment;