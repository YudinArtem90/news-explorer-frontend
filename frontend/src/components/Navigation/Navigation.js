import './Navigation.css';
import { Link } from 'react-router-dom'; 
import { CurrentUserContext } from '../../utils/contexts/user/CurrentUserContext';
import React from 'react';

function Navigation({mainPage , openMenu, savedNews}) {
    
    const classLink = `header__menu-link ${savedNews ? 'header__menu-link_theme_black' : 'header__menu-link_theme_white'}`;
    const classLi = `header__menu-li ${savedNews ? 'header__menu-li_active-theme_black' : 'header__menu-li_active-theme_white'}`;
    const currentUser = React.useContext(CurrentUserContext);

    let classLiMainPage = '';
    let classLiSavedNews = '';

    if(currentUser.loggedIn){
        classLiMainPage = `header__menu-li ${mainPage ? 'header__menu-li_active-theme_white' : ''}`;
        classLiSavedNews = `header__menu-li ${savedNews ? 'header__menu-li_active-theme_black' : ''}`;
    }

    return (
        <>
            <ul className="header__menu-ul-desktop">
                {
                    !currentUser.loggedIn  ?
                        <li className={classLi}><Link to="/" className={classLink}>Главная</Link></li>
                        :
                        <>
                            <li className={classLiMainPage}><Link to="/" className={classLink}>Главная</Link></li>
                            <li className={classLiSavedNews}><Link to="/saved-news" className={classLink}>Сохранённые статьи</Link></li>
                        </>
                }
            </ul>

            {
                openMenu ?
                    <ul className="header__menu-ul-mobile">
                        <li className="header__menu-li"><Link to="/" className='header__menu-link header__menu-link_theme_white'>Главная</Link></li>
                        <li className="header__menu-li"><Link to="/saved-news" className='header__menu-link header__menu-link_theme_white'>Сохранённые статьи</Link></li>
                    </ul> : null
            }
        </>
    );
  }
  
  export default Navigation;