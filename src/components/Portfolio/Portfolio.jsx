import { Container, Row, Col } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './porfilio.css';
import anyyes from '../../assets/anyesThumbnail.png';
import techblog from '../../assets/techBlogThumbnail.png';
import liberThumbNail from '../../assets/liberThumbnail.png'
import cryptograbber from '../../assets/CryptoGrabberThumbNail.png'
import blicky from '../../assets/blicky-thumbnail.png'
import GDATMs from '../../assets/gd-Thumbnail.png'


const Portfolio = () => {
    return (
        // renders the portfolio component
        <div id="portfolio">
            <h1 className='portfolio-title'>Portfolio</h1>
            <h2 className='port-header'>Each Project is a unique piece of Web Development <span className='emoji'>🧩</span></h2>
            {/* container holding all projects and descs */}


            <>
            {/* project 3 */}
            <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Hospital Management System<span className='emoji'>🖥️</span></h3>
                            <p className='proj-text'>
                            I developed a Hospital Management System in Java, focusing on efficient patient data management and streamlined hospital operations. The system includes features for patient registration, appointment scheduling, and medical record management. This project showcases my proficiency in Java and software development.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS (BootStrap), JavaScript, Node.js, SQL ,java.
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    
                                </div>
                                <div className="mr-2">
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={techblog}
                            alt="tech project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>

                </Row>
            </>
        </div>

        
    );
};

export default Portfolio;

