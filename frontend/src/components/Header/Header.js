import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { withRouter } from 'react-router-dom'; 
import { CurrentUserContext } from '../../utils/contexts/user/CurrentUserContext';

function Header(props) {

    const [openMenu, setOpenMenu] = React.useState(false);
    const { hideMenu, setHideMenu, onSignOut } = props;
    const savedNews = props.location.pathname === '/saved-news';
    const mainPage = props.location.pathname === '/';
    const currentUser = React.useContext(CurrentUserContext);

    const openModal = () => {
      props.setShowModal(true);
    }

    const openMobileMenu = () => {
      setOpenMenu(false);
      setHideMenu(true);
      openModal();
    }

    // console.log('Header currentUser.loggedIn', currentUser.loggedIn);
    // console.log('Header mainPage', mainPage);

    return (
      <div className={`header ${openMenu ? 'header_theme_black' : ''} ${savedNews ? 'header_saved-news_page' : 'header_main_page'} ${hideMenu && 'header_hideMenu'}`}>
        <div className="header__left-container">
            {
              openMenu ? 
                <h2 className={`header__text header__text_theme_white`}>NewsExplorer</h2>
                :  
                <h2 className={`header__text ${savedNews ? 'header__text_theme_black' : 'header__text_theme_white'}`}>NewsExplorer</h2>
            }
        </div>
        <div className="header__right-container">


            <div className="header__menu-desktop">
              <Navigation mainPage={mainPage} openMenu={openMenu} savedNews={savedNews} />
              {
                mainPage ? 
                  currentUser.loggedIn ?
                    <button className="header__button-log-out-account header__button-log-out-account_theme_white" onClick={onSignOut}>{currentUser.name} 
                      <i className="header__button-icon header__button-icon_theme_white"/>
                    </button>
                    : <button className="header__authorization" onClick={openModal}>Авторизоваться</button> : 
                      <button className="header__button-log-out-account header__button-log-out-account_theme_black" onClick={onSignOut}>{currentUser.name} 
                        <i className="header__button-icon header__button-icon_theme_black"/>
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
                { mainPage ? <button className="header__authorization" onClick={openMobileMenu}>Авторизоваться</button> : null }
              </div> : null
        }
      </div>
    );
  }
  
export default withRouter(Header);