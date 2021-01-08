import './Main.css';
import React from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';
import About from '../About/About';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';

function Main() {

    return (
      <div className="main">
        <SearchContainer/>
        <Preloader/>
        <NewsCardList/>
        <About/>
        <PopupWithForm/>
      </div>
    );
  }
  
  export default Main;