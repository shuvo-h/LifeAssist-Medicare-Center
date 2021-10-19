import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useLoadedData from '../../hooks/useLoadedData';
import GuestDoctor from './GuestDoctor/GuestDoctor';
import './home.css';
import { GiCheckMark } from 'react-icons/gi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
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
            <Row className="border-bottom">
                <Col className="banner-text-container border">
                    <div className="banner-text ms-5 my-3">
                        <h4 className="text-end">Welcome to <span className="text-primary fs-3 "><br /> LifeAssist Medicare Hospital</span></h4>
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
                        <Link to="/regular-appointment-form" className="banner-appointment-btn px-4 py-2 rounded bg-success fw-bold text-center">MAKE AN APPOINTMENT</Link>
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
            <div className="mt-5">
                <Services></Services>
            </div>
            <div className="mt-5">
                <h2 className="text-center ">Our Top Doctors</h2>
                <hr />
                <Row>
                    {
                        topDoctors.map(topDoctor => <TopDoctor topDoctor={topDoctor} key={topDoctor.doc_id}></TopDoctor>)
                    }
                </Row>
            </div>
            <div className="mt-5">
                <h2 className="text-center ">Nursing Internships and Practicums </h2>
                <hr />
                <Row className="my-4 border-bottom">
                    <Col lg={6} className="internship-content p-4">
                    <h4 className="text-center my-2 text-info">Internship Opportunity</h4>
                        <p className="ms-4 mt-4">
                            Nursing internship in LifeAssist Medicare Center is open now. 
                            We only accept intern student who are recommanded by our expert doctors. 
                            Contact with the appropriate doctor with your resume to remommand.
                        </p>
                        <ul>
                            <li className="fs-4 text-primary ms-5 list-style-none">
                                <IconContext.Provider value={{ color: "green", className: "global-class-name me-3" }}><BsFillArrowRightCircleFill /></IconContext.Provider>
                                We provide standard nursing training.
                            </li>
                            <li className="fs-4 text-primary ms-5">
                                <IconContext.Provider value={{ color: "green", className: "global-class-name me-3" }}><BsFillArrowRightCircleFill /></IconContext.Provider>
                                After successfully completing internship, have an opportunity to get job as a junior nurse in our hospital.
                            </li>
                            <li className="fs-4 text-primary ms-5">
                                <IconContext.Provider value={{ color: "green", className: "global-class-name me-3" }}><BsFillArrowRightCircleFill /></IconContext.Provider>
                                Basic necessary equipments will be provided by us.
                            </li>
                        </ul>
                         <p className="text-end">For Internship to join With recommendation <Link to="" className="intern-apply-btn  text-decoration-none fs-2 px-2 py-1 rounded border">Apply here</Link></p>
                    </Col>
                    <Col lg={6}>
                        <img className="img-fluid ms-auto d-block p-4 rounded-circle" src="https://i.ibb.co/fkGtRgT/nursing-Internship.jpg" alt="" />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Home;



