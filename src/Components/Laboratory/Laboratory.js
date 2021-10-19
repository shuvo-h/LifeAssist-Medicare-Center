import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useLoadedData from '../../hooks/useLoadedData';
import Equipment from '../Equipment/Equipment';

const Laboratory = () => {
    const equipmentUrl = '/equipment-data.json';
    const allEquipments = useLoadedData(equipmentUrl);
    return (
        <Container>
            <h2>Lab and  Equipments</h2> 
            <Row>
                {
                    allEquipments.map(equipment=><Equipment equipment={equipment} key={equipment.equip_id}></Equipment>)
                }
            </Row>
        </Container>
    );
};

export default Laboratory;