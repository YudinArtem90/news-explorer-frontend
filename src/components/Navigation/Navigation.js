import './Navigation.css';
import { Link } from 'react-router-dom'; 

function Navigation({mainPage , openMenu, savedNews}) {
    
    const classLink = `header__menu-link ${savedNews ? 'header__menu-link_theme_black' : 'header__menu-link_theme_white'}`;
    const classLi = `header__menu-li ${savedNews ? 'header__menu-li_active-theme_black' : 'header__menu-li_active-theme_white'}`;

    return (
        <>
            <ul className="header__menu-ul-desktop">
                {
                    mainPage ?
                    <li className={classLi}><Link to="/" className={classLink}>Главная</Link></li>
                    :
                    <>
                        <li className="header__menu-li"><Link to="/" className={classLink}>Главная</Link></li>
                        <li className={classLi}><Link to="/saved-news" className={classLink}>Сохранённые статьи</Link></li>
                    </>
                }
            </ul>

            {
                openMenu ?
                    <ul className="header__menu-ul-mobile">
                        <li className="header__menu-li"><Link to="/" className="header__menu-link">Главная</Link></li>
                        <li className="header__menu-li"><Link to="/saved-news" className="header__menu-link">Сохранённые статьи</Link></li>
                    </ul> : null
            }
        </>
    );
  }
  
  export default Navigation;