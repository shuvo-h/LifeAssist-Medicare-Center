import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useLoadedData from '../../../hooks/useLoadedData';
import './equipmentDetails.css';

const EquipmentDetails = () => {
    const {equipmentId} = useParams();
    const equipmentUrl = '/equipment-data.json';
    const allEquipments = useLoadedData(equipmentUrl);
    const selectedEquipment = allEquipments.find(equipment=>equipment.equip_id === equipmentId);
    const { equip_img, equip_name, imported, imported_year, incharge, price, text} = selectedEquipment || {};
    
    return (
        <Container className="equip-details-container">
            <h2 className="text-center my-5 bg-light">{equip_name}</h2>
            <Row>
                <Col className="text-center m-4">
                    <ul className="list-unstyled fs-4">
                        <li>Made by: {imported}</li>
                        <li>Imported in: {imported_year}</li>
                        <li>Total budget: ${price}</li>
                    </ul>
                    <h3>Incharge and Operator: {incharge}</h3>
                </Col>
                <Col><img className="d-block mx-auto p-3 border m-4" src={equip_img} alt="" /></Col>
            </Row>
            <p>{text}</p>
        </Container>
    );
};

export default EquipmentDetails;