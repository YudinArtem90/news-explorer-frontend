import './NewsCardList.css';
import React from 'react';
import Card from '../Card/Card';
import { Link, withRouter } from 'react-router-dom';
import {CurrentPageContext} from '../../utils/contexts/page/CurrentPageContext';

function NewsCardList(props) {

    // const mainPage = props.location.pathname === '/';
    const mainPage = React.useContext(CurrentPageContext);

    return (
        <div className={`news-card-list-container ${mainPage ? 'news-card-list-container_theme_main-page' : 'news-card-list-container_theme_saved-news'}`}>

            {
                mainPage ?  <h2 className="news-card-list-container__title">Результаты поиска</h2> : null
            }
            
            <div className="news-card-list-container__card-list">
            <>
                <Card
                    date={'2 августа, 2019'} 
                    title={'Национальное достояние – парки'} 
                    article={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. dfgdf dfg dfg df gdfg dfgfdgdfgdfgdfgdfgdfgg dfg dfg d dfg dfg '} 
                    sourceOfInformation={'Лента.ру'}
                    category={'Природа'}
                />
            </>


            <>
                <Card
                    date={'2 августа, 2019'} 
                    title={'Национальное достояние – парки'} 
                    article={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складыв...'} 
                    sourceOfInformation={'Медиазона'}
                    category={'Природа'}
                />
            </>



            <>
                <Card
                    date={'8 декабря, 2019'} 
                    title={'Лесные огоньки: история одной фотографии'} 
                    article={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складыв...'} 
                    sourceOfInformation={'Медуза'}
                    category={'Природа'}
                />
            </>


            <>
                <Card
                    date={'8 декабря, 2019'} 
                    title={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'} 
                    article={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'} 
                    sourceOfInformation={'Лента.ру'}
                    category={'Природа'}
                />
            </>



            <>
                <Card
                    date={'8 декабря, 2019'} 
                    title={'Национальное достояние – парки'} 
                    article={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'} 
                    sourceOfInformation={'Лента.ру'}
                    category={'Природа'}
                />
            </>

            </div>

            {
                mainPage ?  <button className="news-card-list-container__button">Показать еще</button> : null
            }
            
        </div>
    );
  }
  
  export default withRouter(NewsCardList);