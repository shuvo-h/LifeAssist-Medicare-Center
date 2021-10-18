import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useLoadedData from '../../hooks/useLoadedData';
import GuestDoctor from './GuestDoctor/GuestDoctor';
import './home.css';
import { GiCheckMark } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import Services from '../Services/Services';


const Home = () => {
    const guest_uri = '/guest-doctors.json';
    const guestDoctors = useLoadedData(guest_uri);
    const guestDrDisplay = guestDoctors.slice(0,3);

    return (
        <Container>
            <Row>
                <Col className="banner-text-container border">
                    <div className="banner-back-img">
                        <div className="banner-text">
                            <h3>Welcome to <span><br /> LifeAssist Medicare Hospital</span></h3>
                            <p>
                            LifeAssist Medicare Hospital has all the characteristics of a  world-class hospital with wide range of services and specialists, digital equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT through paperless medical records. 
                            </p>
                            <ul>
                                <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Best for corporate checkup</li>
                                <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Make your telemidecie</li>
                                <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Cardic center</li>
                                <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Lab and radiolgy</li>
                                <li> <IconContext.Provider value={{ color: "green", className: "global-class-name" }}><GiCheckMark /></IconContext.Provider> Evening OPD</li>
                            </ul>
                            <Row>
                                <Col>
                                    <h6>OUR MISSION</h6>
                                
                                    <p>
                                        We are dedicated to meeting the needs of: <br />
                                        Our patient : excellent and cost-effective healthcare <br />
                                        Our staff : continuing development and welfare <br />
                                        Our nation : partnership in promoting health in Bangladesh
                                    </p>
                                </Col>
                                <Col>
                                    <h6>OUR VISION</h6>
                                    <p>
                                        "To be a renowned organization at the leading edge of Medicine, providing quality healthcare to meet our nation's aspirations."
                                    </p>
                                </Col>
                            </Row>
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
        </Container>
    );
};

export default Home;