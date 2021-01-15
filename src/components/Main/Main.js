import './Main.css';
import React from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';
import About from '../About/About';
// import PopupWithForm from '../PopupWithForm/PopupWithForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import status from '../../utils/statusSearch/status';

function Main() {

    const [searchStatus, setSearchStatus] = React.useState(status.searchDisabled());
    const searchNews = (event) => {
      event.preventDefault();
      setSearchStatus(status.searchIsActive());

      setTimeout(() => setSearchStatus(status.searchNothingFound()), 3000);
    }
    
    console.log('Main searchStatus', searchStatus);
    return (
      <div className="main">
        <SearchContainer searchNews={searchNews}/>
        {
          searchStatus !== status.searchDisabled() ? <Preloader searchStatus={searchStatus}/> : null
        }
        <NewsCardList/>
        <About/>
        {/* <PopupWithForm/> */}
      </div>
    );
  }
  
  export default Main;