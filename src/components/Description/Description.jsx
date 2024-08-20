import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './description.css';
import portrait1 from '../../assets/DC90F5B1-793E-4326-8061-0384F1A4176E.png';
import portrait2 from '../../assets/IMG_0073.jpg';
import portrait3 from '../../assets/IMG_2637.jpg';


function Description() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const wireframeAnimation = useSpring({
        transform: `rotate(${scrollY / 5}deg)`,
    });

    const portraitImages = [portrait1, portrait2, portrait3];

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div className="description-container" id="description">
            <Container className="description-content">
                <Row className="align-items-center">
                    <Col xs={12} md={12} lg={6} className='mb-4'>
                        {/* carousel for portrait images */}
                        <Slider {...carouselSettings}>
                            {portraitImages.map((portrait, index) => (
                                <img
                                    key={index}
                                    src={portrait}
                                    alt={`Portrait Image ${index + 1}`}
                                    className="img-fluid description-image"
                                />
                            ))}
                        </Slider>
                    </Col>
                    <Col xs={12} md={12} lg={6} className='texttext'>
                        {/* div containing the animation of the circle */}
                        <animated.div style={wireframeAnimation} className="wireframe-polygon"></animated.div>
                        {/* about me header */}
                        <h4 className='about-me-title'>About Me</h4>
                        {/* about me description header title */}
                        <p className="about-me-text">
                            👋 I am a Mechatronics Engineer with a strong passion for integrating mechanical systems with advanced computing technologies. I have successfully completed a Java Full Stack internship at Capgemini India, where I gained hands-on experience in developing robust web applications. My skill set includes:
                            Front-end Development: Proficient in HTML, CSS, and JavaScript frameworks such as React and Angular, enabling me to create responsive and user-friendly interfaces.

Back-end Development: Experience with Java and Spring Boot for building RESTful APIs and microservices, ensuring efficient data processing and integration.
                            If you’re looking for a dedicated and versatile web developer with a passion for teaching and a solid technical background, I’d love to connect!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Description;
