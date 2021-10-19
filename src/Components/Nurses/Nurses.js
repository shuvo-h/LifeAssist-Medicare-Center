import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useLoadedData from '../../hooks/useLoadedData';
import Nurse from '../Nurse/Nurse';

const Nurses = () => {
    const nurseDbUrl = "/nurse-data-info.json";
    const allNurses = useLoadedData(nurseDbUrl);
    return (
        <Container className="my-5">
            <h2 className="text-center">Our all Nurse</h2>
            <hr />
            <Row>
                {
                    allNurses.map(nurse => <Nurse nurse={nurse} key={nurse.nrs_id}></Nurse>)
                }
            </Row>
        </Container>
    );
};

export default Nurses;