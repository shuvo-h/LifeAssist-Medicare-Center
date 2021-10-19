import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useLoadedData from '../../hooks/useLoadedData';
import GuestDoctor from './GuestDoctor/GuestDoctor';
import './home.css';
import { GiCheckMark } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import Services from '../Services/Services';
import { Link } from 'react-router-dom';
import TopDoctor from '../TopDoctor/TopDoctor';


const Home = () => {
    const guest_uri = '/guest-doctors.json';
    const guestDoctors = useLoadedData(guest_uri);
    const guestDrDisplay = guestDoctors.slice(0,3);

    const doctorsDbUrl = '/doctors-database.json';
    const allDoctors = useLoadedData(doctorsDbUrl);
    const topDoctors = allDoctors.slice(0,4);

    return (
        <Container>
            <Row>
                <Col className="banner-text-container border">
                    <div className="banner-text ms-5 mt-3">
                        <h4 className="text-end">Welcome to <span className="fs-3"><br /> LifeAssist Medicare Hospital</span></h4>
                        <p>
                        LifeAssist Medicare Center has all the characteristics of a  world-class hospital with wide range of services and specialists, digital equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT through paperless medical records. 
                        </p>
                        <ul>
                            <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Best for corporate checkup</li>
                            <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Make your telemidecie</li>
                            <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Cardic center</li>
                            <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Lab and radiolgy</li>
                            <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Evening OPD</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                        <Link to="/regular-appointment-form" className="banner-appointment-btn px-4 py-2 rounded bg-success fw-bold">MAKE AN APPOINTMENT</Link>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Row>
                        <HomeCarousel></HomeCarousel>
                    </Row>
                    <Row>
                        {
                            guestDrDisplay.map(guestDoctor=><GuestDoctor guestDoctor={guestDoctor} key={guestDoctor.id}></GuestDoctor>)
                        }
                    </Row>
                </Col>
            </Row>
            <Services></Services>
            <div>
                <h2 className="text-center ">Our Top Doctors</h2>
                <hr />
                <Row>
                    {
                        topDoctors.map(topDoctor => <TopDoctor topDoctor={topDoctor} key={topDoctor.doc_id}></TopDoctor>)
                    }
                </Row>
            </div>
            <div>
                <h2 className="text-center ">Nursing Internships and Practicums </h2>
                <hr />
                <Row>
                    {
                        // topDoctors.map(topDoctor => <TopDoctor topDoctor={topDoctor} key={topDoctor.doc_id}></TopDoctor>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Home;



