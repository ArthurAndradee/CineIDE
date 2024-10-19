import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-box">
                <div className="social-icons">
                    <a href='https://www.instagram.com/ide_jr/' target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='https://idejr.com.br/' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='https://www.linkedin.com/company/empresa-júnior-ide/' target='_blank'>
                        <div className='ide-icon'></div>
                    </a>
                </div>
                <div>CineIDE © Todos os direitos reservados.</div>
                <div>Termos de Uso  |  Politica de Privacidade  |  Política de Cookies</div>
                <div className='ide-icon-bottom'></div>
            </div>
        </div>
    );
}

export default Footer;