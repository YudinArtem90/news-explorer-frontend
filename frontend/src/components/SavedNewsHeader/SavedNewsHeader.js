import './SavedNewsHeader.css';
import React from 'react';
import { withRouter } from 'react-router-dom'; 
import NewsCardList from '../NewsCardList/NewsCardList';
import {CurrentUserContext} from '../../utils/contexts/user/CurrentUserContext';

function SavedNewsHeader(props) {

  const { listSavedNewsItems, cardsBookmarks, deleteNewsCardFromTheSavedOnes } = props;
  const currentUser = React.useContext(CurrentUserContext);
  let keywordObject = {};

  React.useEffect(() => {
    props.getSaveNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const convertNewsData = () => {
    let listNews = [];

    listSavedNewsItems.forEach((news, index) => { 
      
      if(typeof keywordObject[news.keyword] === 'undefined'){
        keywordObject[news.keyword] = 1;
      }else{
        keywordObject[news.keyword]++;
      }

      listNews[index] = {
        publishedAt: news.date, 
        title: news.title, 
        description: news.text, 
        source: news.source, 
        urlToImage: news.image, 
        url: news.link,
        keyword: news.keyword,
        key: news._id
      }
    });
    
    return {
      news: listNews,
      categoryName: '',
      numberNewsItems: listSavedNewsItems.length
    }
  }

  const newsData = convertNewsData();
  const keyword = Object.keys(keywordObject).sort(function(a,b){return keywordObject[b]-keywordObject[a]});
  
  return (
    <>
      <div className='saved-news-header'>
        <p className='saved-news-header__save-news'>Сохранённые статьи</p>
        <h2 className='saved-news-header__header-text'>{currentUser.name}, у вас {listSavedNewsItems.length} сохранённых статей</h2>

        {
          keyword.length === 1 && <p className='saved-news-header__keywords'>По ключевым словам: <strong>{keyword[0]}</strong></p>
        }

        {
          keyword.length === 2 && <p className='saved-news-header__keywords'>По ключевым словам: <strong>{keyword[0]}</strong>, <strong>{keyword[1]}</strong></p>
        }

        {
          keyword.length === 3 && <p className='saved-news-header__keywords'>По ключевым словам: <strong>{keyword[0]}</strong>, <strong>{keyword[1]}</strong>, <strong>{keyword[2]}</strong></p>
        }

        {
          keyword.length > 3 && <p className='saved-news-header__keywords'>По ключевым словам: <strong>{keyword[0]}</strong>, <strong>{keyword[1]}</strong> и <strong>{keyword.length - 2}-м другим</strong></p>
        }

      </div>
        {
          listSavedNewsItems.length ? 
            <NewsCardList newsData={newsData} cardsBookmarks={cardsBookmarks} deleteNewsCardFromTheSavedOnes={deleteNewsCardFromTheSavedOnes}/> : null
        }
    </>
  );
  }
  
export default withRouter(SavedNewsHeader);