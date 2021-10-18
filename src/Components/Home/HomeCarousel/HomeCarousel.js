import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css'


const HomeCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="carousol-img d-block w-100 " src="https://i.ibb.co/dKvjrQy/Life-Assist-Medicare-Center-banner-1.jpg" alt="Life-Assist-Medicare-Center-banner-1"/>
                <Carousel.Caption>
                    <h3 className="carousel-text text-primary">LifeAssist Medicare Center Ground</h3>
                    <p className="carousel-text text-primary">A natural ground place infront of the center to keep patient's mind cool</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousol-img d-block w-100" src="https://i.ibb.co/9qphGnG/Life-Assist-Medicare-Center-banner-2.jpg" alt="Life-Assist-Medicare-Center-banner-2" />
                <Carousel.Caption>
                    <h3 className="carousel-text text-primary">Top Specialist Near You</h3>
                    <p className="carousel-text text-primary">Get Treatment from Top Specialized Doctors</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousol-img d-block w-100" src="https://i.ibb.co/CtzXX4N/Life-Assist-Medicare-Center-banner-3.jpg" alt="Life-Assist-Medicare-Center-banner-3"/>
                <Carousel.Caption>
                    <h3 className="carousel-text text-primary">Emmergency Support Team</h3>
                    <p className="carousel-text text-primary">We ensure support for any emergeny situation</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousol-img d-block w-100" src="https://i.ibb.co/G2QsRsn/Life-Assist-Medicare-Center-banner-4.jpg" alt="Life-Assist-Medicare-Center-banner-4"/>
                <Carousel.Caption>
                    <h3 className="carousel-text text-primary">Friendly and Co-operative Doctors</h3>
                    <p className="carousel-text text-primary">Our Doctors are so much friendly with patient's</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeCarousel;