import './Header.css';
import Navigation from '../Navigation/Navigation';
import logout from '../../images/logout.svg';

function Header() {
    return (
      <div className="header">
        <div className="header__left-block">
            <h2 className="header__text">NewsExplorer</h2>
        </div>
        <div className="header__right-block">
            <Navigation/>
            <a className="header__authorization">Авторизоваться</a>
            {/* <a className="header__previous-page">
                Грета
                <img className="header__previous-page-image" src={logout} alt="альтернативный текст"/>
            </a> */}

            {/* <button className="header__open-menu">Грета</button>
            <button className="header__close-menu">Грета</button> */}
        </div>
      </div>
    );
  }
  
  export default Header;