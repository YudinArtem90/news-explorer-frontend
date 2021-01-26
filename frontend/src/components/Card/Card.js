import './Card.css';
import React from 'react';
import {CurrentPageContext} from '../../utils/contexts/page/CurrentPageContext';
import {CurrentUserContext} from '../../utils/contexts/user/CurrentUserContext';
import workingWithDate from '../../utils/WorkingWithDate/WorkingWithDate';

function Card(props) {

    const mainPage = React.useContext(CurrentPageContext);
    const currentUser = React.useContext(CurrentUserContext);
    const {date, title, article, sourceOfInformation, img, saveNews, link, cardsBookmarks, idCard, keyword = '', deleteCardBookmarks} = props;
    const [visibleLabel, setVisibleLabel] = React.useState(false);
    let classButtonCard = `new-card-container__button `;

    const findCards = (cardsBookmarks, link) => { 
        return cardsBookmarks.find(card => card.link === link);
    }

    if(findCards(cardsBookmarks, link)){
        classButtonCard = classButtonCard + `${mainPage ? 'new-card-container__button-save-articles_active' : 'new-card-container__button-delete-articles'}`;
    }else{
        classButtonCard = classButtonCard + `new-card-container__button-save-articles ${
            mainPage && currentUser.loggedIn ? 'new-card-container__button-save-articles_theme_active-main' : 'new-card-container__button-save-articles_theme_disable-main'
        } ${mainPage ? '' : 'new-card-container__button-delete-articles'}`;
    }

    const addCardBookmarks = () => {
        saveNews({
            title: title,
            date: date,
            source: sourceOfInformation,
            text: article,
            link: link,
            image: img
        }, idCard);
    }

    const onButtonClickCard = () => {
        if(currentUser.loggedIn){
            if(mainPage){
                const cardBookmarksData = findCards(cardsBookmarks, link);
                if(cardBookmarksData){
                    deleteCardBookmarks(cardBookmarksData)
                }else{
                    addCardBookmarks();
                }
            }else{
                deleteCardBookmarks(idCard, link);
            }
        }
    }

    const goToTheSourceOfInformation = (e) => {
        if(e.target.localName !== 'button'){
            window.open(`${link}`, "_blank");
        }
    }

    const goToNewsAgency = () => {
        const url = new URL(link);
        window.open(`${url.protocol}/${url.hostname}`, "_blank");
    }

    return (
        <div className="new-card-container">
            <div className="new-card-container__header" style={{ backgroundImage: `url(${img})` }} onClick={goToTheSourceOfInformation}>
                {
                    !mainPage ? <label className="new-card-container__category">{keyword}</label> : null
                }

                {
                    visibleLabel && (!currentUser.loggedIn && mainPage) ? 
                    <label className="new-card-container__inform-label">Войдите, чтобы сохранять статьи</label> : null
                }
                
                {
                    visibleLabel && (currentUser.loggedIn && !mainPage) ? <label className="new-card-container__inform-label">Убрать из сохранённых</label> : null
                }
                <button 
                    onMouseOver={() => setVisibleLabel(true)}
                    onMouseOut={() => setVisibleLabel(false)}
                    className={classButtonCard}
                    onClick={onButtonClickCard}
                ></button>
            </div>
            <div className="new-card-container__main">
                <label className="new-card-container__date">{workingWithDate.getDateForNews(date)}</label>
                <h2 className="new-card-container__title" onClick={goToTheSourceOfInformation}>{title}</h2>
                <p className="new-card-container__article">{article}</p>
                <label className="new-card-container__source-of-information" onClick={goToNewsAgency}>{sourceOfInformation}</label>
            </div>
        </div>
    );
  }
  
  export default Card;