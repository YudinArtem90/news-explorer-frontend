import './SavedNewsHeader.css';
import React from 'react';
import { withRouter } from 'react-router-dom'; 
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNewsHeader(props) {

    return (
      <>
        <div className='saved-news-header'>
          <p className='saved-news-header__save-news'>Сохранённые статьи</p>
          <h2 className='saved-news-header__header-text'>Грета, у вас 5 сохранённых статей</h2>
          <p className='saved-news-header__keywords'>По ключевым словам: <strong>Природа</strong>, <strong>Тайга</strong> и <strong>2-м другим</strong></p>
        </div>
        <NewsCardList/>
      </>
    );
  }
  
export default withRouter(SavedNewsHeader);