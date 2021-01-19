import './NewsCardList.css';
import React from 'react';
import Card from '../Card/Card';
import { Link, withRouter } from 'react-router-dom';
import {CurrentPageContext} from '../../utils/contexts/page/CurrentPageContext';

function NewsCardList(props) {

    // const mainPage = props.location.pathname === '/';
    const mainPage = React.useContext(CurrentPageContext);
    const { news, categoryName, numberNewsItems } = props;
    const [numberСards, setNumberСards] = React.useState(numberNewsItems > 3 ? 3 : numberNewsItems);

    const showMore = () => {
        setNumberСards(numberСards + 3);
        getNews();
    }

    const getNews = () => {
        let newsCards = [];

        for(let i = 0; i < numberСards; i++){
            const { publishedAt, title, description, author, urlToImage } = news[i];
            console.log('news[i]', news[i]);
            newsCards[i] = <Card
                date={publishedAt} 
                title={title} 
                article={description} 
                sourceOfInformation={author}
                category={categoryName}
                img={urlToImage}
            />;
        }

        return newsCards;
    }

    return (
        <div className={`news-card-list-container ${mainPage ? 'news-card-list-container_theme_main-page' : 'news-card-list-container_theme_saved-news'}`}>

            {
                mainPage ?  <h2 className="news-card-list-container__title">Результаты поиска</h2> : null
            }
            
            <div className="news-card-list-container__card-list">

                {
                    getNews()
                }

            </div>

            {
                mainPage && (numberСards < numberNewsItems) ?  <button className="news-card-list-container__button" onClick={showMore}>Показать еще</button> : null
            }
            
        </div>
    );
  }
  
  export default withRouter(NewsCardList);