import './Main.css';
import React from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import status from '../../utils/statusSearch/status';
import newsApi from '../../utils/api/NewsApi';

function Main() {

    const [searchStatus, setSearchStatus] = React.useState(status.searchDisabled());
    const [newsData, setNewsData] = React.useState({
      categoryName: '', 
      news: [],
      numberNewsItems: 0
    });

    const searchNews = (news) => {
      
      setNewsData({
        categoryName: '', 
        news: [],
        numberNewsItems: 0
      });
      setSearchStatus(status.searchIsActive());

      newsApi
        .getNews(news)
        .then(request => { 
          const newsArray = request.articles;
          if(newsArray.length){
            setNewsData({
              categoryName: news, 
              news: newsArray,
              numberNewsItems: request.totalResults
            });
            setSearchStatus(status.searchDisabled());
          }else{
            setSearchStatus(status.searchNothingFound());
          }
        })
        .catch(error => {
          setSearchStatus(status.searchNothingFound());
        });
    }
    
    return (
      <div className="main">
        <SearchContainer searchNews={searchNews}/>
        {
          searchStatus !== status.searchDisabled() ? <Preloader searchStatus={searchStatus}/> : null
        }
        {
          newsData.news.length ? <NewsCardList {...newsData}/> : null
        }
        <About/>
      </div>
    );
  }
  
  export default Main;