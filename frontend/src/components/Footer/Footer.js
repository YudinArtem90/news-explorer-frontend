import './Footer.css';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';
import { Link } from 'react-router-dom'; 

function Footer() {
    return (
      <div className="footer">
        <p className="footer__copyright">&#169; 2020 Supersite, Powered by News API</p>
        <nav className="footer__nav">
            <Link to="/" className="footer__link" title="Главная страница">Главная</Link>
            <a href="https://praktikum.yandex.ru" className="footer__link" target="_blank" title="Яндекс.Практикум">Яндекс.Практикум</a>
        </nav>
        <div className="footer__container-icon">
            <img src={github} alt="github" className="footer__icon" onClick={() => window.open('https://github.com/YudinArtem90')}/>
            <img src={facebook} alt="facebook" className="footer__icon" onClick={() => window.open('https://www.facebook.com/tema.udin')}/>
        </div>
      </div>
    );
  }
  
  export default Footer;