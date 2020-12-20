import './Navigation.css';

function Navigation() {
    return (
        <ul className="header__menu">
            <li className="header__menu-li"><a href="#" className="header__menu-link">Главная</a></li>
            <li className="header__menu-li"><a href="#" className="header__menu-link">Сохранённые статьи</a></li>
        </ul>
    );
  }
  
  export default Navigation;