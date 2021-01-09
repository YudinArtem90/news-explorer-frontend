import './Navigation.css';

function Navigation({mainPage , openMenu}) {
    
    return (
        <>
            <ul className="header__menu-ul-desktop">
                {
                    mainPage ?
                    <li className="header__menu-li"><a href="#" className="header__menu-link">Главная</a></li>
                    :
                    <>
                        <li className="header__menu-li"><a href="#" className="header__menu-link">Главная</a></li>
                        <li className="header__menu-li"><a href="#" className="header__menu-link">Сохранённые статьи</a></li>
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