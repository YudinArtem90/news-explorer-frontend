import './Footer.css';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';

function Footer() {
    return (
      <div className="footer">
        <p className="footer__copyright">&#169; 2020 Supersite, Powered by News API</p>
        <nav className="footer__nav">
            <a className="footer__link" href="https://yandex.ru/maps/" target="_blank" title="Карты">Главная</a>
            <a className="footer__link" href="https://yandex.ru/maps/" target="_blank" title="Карты">Яндекс.Практикум</a>
        </nav>
        <div className="footer__container-icon">
            <img src={github} alt="github" className="footer__icon"/>
            <img src={facebook} alt="facebook" className="footer__icon"/>
        </div>
      </div>
    );
  }
  
  export default Footer;