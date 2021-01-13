import './Navigation.css';

function Navigation({mainPage , openMenu, savedNews}) {
    
    const classLink = `header__menu-link ${savedNews ? 'header__menu-link_theme_black' : 'header__menu-link_theme_white'}`;
    const classLi = `header__menu-li ${savedNews ? 'header__menu-li_active-theme_black' : 'header__menu-li_active-theme_white'}`;

    return (
        <>
            <ul className="header__menu-ul-desktop">
                {
                    mainPage ?
                    <li className={classLi}><a href="#" className={classLink}>Главная</a></li>
                    :
                    <>
                        <li className="header__menu-li"><a href="#" className={classLink}>Главная</a></li>
                        <li className={classLi}><a href="#" className={classLink}>Сохранённые статьи</a></li>
                    </>
                }
            </ul>

            {
                openMenu ?
                    <ul className="header__menu-ul-mobile">
                        <li className="header__menu-li"><a href="#" className="header__menu-link">Главная</a></li>
                        <li className="header__menu-li"><a href="#" className="header__menu-link">Сохранённые статьи</a></li>
                    </ul> : null
            }
        </>
    );
  }
  
  export default Navigation;