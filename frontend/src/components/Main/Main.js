import './Main.css';
import React from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import status from '../../utils/statusSearch/status';

function Main(props) {
  
    const {newsData, searchStatus, searchNews} = props;

    return (
      <div className="main">
        <SearchContainer searchNews={searchNews}/>
        {
          searchStatus !== status.searchDisabled() ? <Preloader searchStatus={searchStatus}/> : null
        }
        {
          newsData.news.length ? <NewsCardList {...props}/> : null
        }
        <About/>
      </div>
    );
  }
  
  export default Main;