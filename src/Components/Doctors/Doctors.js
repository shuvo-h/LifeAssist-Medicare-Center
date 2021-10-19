import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useLoadedData from '../../hooks/useLoadedData'
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const doctorDbUrl = "/doctors-database.json";
    const allDoctors = useLoadedData(doctorDbUrl);
    return (
        <Container className="my-5">
            <h2 className="text-center">Our all Doctors</h2>
            <hr />
            <Row>
                {
                    allDoctors.map(doctor => <Doctor doctor={doctor} key={doctor.doc_id}></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;