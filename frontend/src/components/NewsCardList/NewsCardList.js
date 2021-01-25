import './NewsCardList.css';
import React from 'react';
import Card from '../Card/Card';
import { withRouter } from 'react-router-dom';
import {CurrentPageContext} from '../../utils/contexts/page/CurrentPageContext';

function NewsCardList(props) {

    // const mainPage = props.location.pathname === '/';
    const mainPage = React.useContext(CurrentPageContext);
    const { newsData } = props;
    const { news, categoryName, numberNewsItems} = newsData;

    console.log('NewsCardList props', props);

    const [numberСards, setNumberСards] = React.useState(
        mainPage 
            ? numberNewsItems > 3 ? 3 : numberNewsItems 
        : 
            news.length
    );

    const showMore = () => {
        setNumberСards(numberСards + 3);
        getNews();
    }

    const getNews = () => {
        let newsCards = [];

        for(let i = 0; i < numberСards; i++){
            const { publishedAt, title, description, source, urlToImage, url, keyword, key } = news[i];

            const keyCard = typeof key !== undefined ? key : btoa(url);

            newsCards[i] = <Card
                date={publishedAt} 
                title={title} 
                article={description} 
                sourceOfInformation={typeof source === 'string' ? source : source.name}
                category={categoryName}
                img={urlToImage}
                key={keyCard}
                link={url}
                idCard={keyCard}
                keyword={keyword}
                {...props}
            />;
        }
        console.log('newsCards', newsCards);
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