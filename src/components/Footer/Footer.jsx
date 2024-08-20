import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
    // return for the footer component
    return (
        <footer className="footer py-4 bg-dark">
            <p className='mt-2 footer-header'> YASH BHOSALE | JAVA Full Stack Web Developer.</p>
            <div className="footer-container">
                
                {/* clickable footer icons */}
                
                <a className="footer-links" href="https://www.linkedin.com/in/yash-bhosale-33398a192">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-1x mx-1 footer-icons" />
                </a>
                <a className="footer-links" href="https://github.com/yashbhosalegithub">
                    <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1 footer-icons" />
                </a>
                
            </div>
        </footer>
    );
};

export default Footer;
