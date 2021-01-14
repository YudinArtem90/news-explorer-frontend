import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
// import logout from '../../images/logout.svg';
import { Link, withRouter } from 'react-router-dom'; 

function Header(props) {

    // console.log('props', props);

    const [openMenu, setOpenMenu] = React.useState(false);
    const savedNews = props.location.pathname === '/saved-news';
    const mainPage = props.location.pathname === '/';

    const openModal = () => {
      // console.log('props', props);
      props.setShowModal(true);
    }

    const logOutAccount = () => {
      // разлогинется
      window.location.replace("/");
    }
    // console.log('savedNews', savedNews);
    // console.log('mainPage', mainPage);
    // console.log('innerWidth', window.innerWidth);

    return (
      <div className={`header ${openMenu ? 'header_theme_black' : ''} ${savedNews ? 'header_saved-news_page' : 'header_main_page'}`}>
        <div className="header__left-container">
            <h2 className={`header__text ${savedNews ? 'header__text_theme_black' : 'header__text_theme_white'}`}>NewsExplorer</h2>
        </div>
        <div className="header__right-container">


            <div className="header__menu-desktop">
              <Navigation mainPage={mainPage} openMenu={openMenu} savedNews={savedNews}/>
              {
                mainPage ? 
                <button className="header__authorization" onClick={openModal}>Авторизоваться</button> : 
                <button className="header__button-back"
                  onClick={logOutAccount}
                >Грета 
                  <i className="header__button-icon"/>
                </button>
              }
            </div>


            <button className={`header__button-menu-mobile 
              ${mainPage ? "header__button-menu-mobile_theme_black" : "header__button-menu-mobile_theme_white"} 
              ${openMenu ? "header__button-menu-mobile_state_close" : "header__button-menu-mobile_state_open"} 
            `}
              onClick={() => setOpenMenu(!openMenu)}
            />
        </div>

        {
          openMenu ? 
              <div className="header__menu-mobile">
                <Navigation mainPage={mainPage} openMenu={openMenu} savedNews={savedNews}/>
                <button className="header__authorization" onClick={openModal}>Авторизоваться</button>
              </div> : null
        }
      </div>
    );
  }
  
export default withRouter(Header);