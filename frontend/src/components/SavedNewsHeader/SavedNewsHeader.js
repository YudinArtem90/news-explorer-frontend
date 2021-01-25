import './SavedNewsHeader.css';
import React from 'react';
import { withRouter } from 'react-router-dom'; 
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNewsHeader(props) {

  console.log('SavedNewsHeader props', props);
  const { listSavedNewsItems, cardsBookmarks, deleteCardBookmarks } = props;

  React.useEffect(() => {
    props.getSaveNews();
  }, []);

  const convertNewsData = () => {
    let listNews = [];

    listSavedNewsItems.forEach((news, index) => { 
      debugger;
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

  return (
    <>
      <div className='saved-news-header'>
        <p className='saved-news-header__save-news'>Сохранённые статьи</p>
        <h2 className='saved-news-header__header-text'>Грета, у вас 5 сохранённых статей</h2>
        <p className='saved-news-header__keywords'>По ключевым словам: <strong>Природа</strong>, <strong>Тайга</strong> и <strong>2-м другим</strong></p>
      </div>
      {listSavedNewsItems.length 
          ? 
        <NewsCardList newsData={convertNewsData()} cardsBookmarks={cardsBookmarks} deleteCardBookmarks={deleteCardBookmarks}/> 
          : 
        null
        }
    </>
  );
  }
  
export default withRouter(SavedNewsHeader);