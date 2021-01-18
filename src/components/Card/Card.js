import './Card.css';
import React from 'react';
import {CurrentPageContext} from '../../utils/contexts/page/CurrentPageContext';
import {CurrentUserContext} from '../../utils/contexts/user/CurrentUserContext';

function Card({date, title, article, sourceOfInformation, category = '', img}) {

    const mainPage = React.useContext(CurrentPageContext);
    const loggedIn = React.useContext(CurrentUserContext);

    const [visibleLabel, setVisibleLabel] = React.useState(false);
    const [cardBookmarks, setCardBookmarks] = React.useState(false);
    let classButtonCard = `new-card-container__button `;

    if(cardBookmarks){
        classButtonCard = classButtonCard + `${mainPage ? 'new-card-container__button-save-articles_active' : 'new-card-container__button-delete-articles'}`;
    }else{
        classButtonCard = classButtonCard + `${mainPage ? 'new-card-container__button-save-articles' : 'new-card-container__button-delete-articles'}`;
    }

    const addCardBookmarks = () => {
        setCardBookmarks(!cardBookmarks);
    }

    return (
        <div className="new-card-container">
            <div className="new-card-container__header" style={{ backgroundImage: `url(${img})` }}>
                {
                    !mainPage ? <label className="new-card-container__category">{category}</label> : null
                }

                {/* && (!loggedIn && mainPage) ?  */}
                {
                    visibleLabel && mainPage ? 
                    <label className="new-card-container__inform-label">Войдите, чтобы сохранять статьи</label> : null
                }
                
                {
                    visibleLabel && (loggedIn && !mainPage) ? <label className="new-card-container__inform-label">Убрать из сохранённых</label> : null
                }
                <button 
                    onMouseOver={() => setVisibleLabel(true)}
                    onMouseOut={() => setVisibleLabel(false)}
                    className={classButtonCard}
                    onClick={addCardBookmarks}
                ></button>
            </div>
            <div className="new-card-container__main">
                <label className="new-card-container__date">{date}</label>
                <h2 className="new-card-container__title">{title}</h2>
                <p className="new-card-container__article">{article}</p>
                <label className="new-card-container__source-of-information">{sourceOfInformation !== null ? sourceOfInformation : '-'}</label>
            </div>
        </div>
    );
  }
  
  export default Card;