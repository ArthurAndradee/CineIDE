import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-box">
                <div className="social-icons">
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <div className='ide-icon'></div>
                </div>
                <div>CineIDE © Todos os direitos reservados.</div>
                <div>Termos de Uso  |  Politica de Privacidade  |  Política de Cookies</div>
                    <div className='ide-icon-bottom'></div>
            </div>
        </div>
    );
}

export default Footer;