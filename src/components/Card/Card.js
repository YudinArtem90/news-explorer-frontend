import './Card.css';
import React from 'react';
import {CurrentPageContext} from '../../utils/contexts/page/CurrentPageContext';

function Card({date, title, article, sourceOfInformation, category = ''}) {

    const mainPage = React.useContext(CurrentPageContext);
    const [visibleLabel, setVisibleLabel] = React.useState(false);
    const textLabel = `${mainPage ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`;
    
    return (
        <div className="new-card-container">
            <div className="new-card-container__header">
                {
                    !mainPage ? <label className="new-card-container__category">{category}</label> : null
                }
                {
                    visibleLabel ? <label className="new-card-container__inform-label">{textLabel}</label> : null
                }
                <button 
                    onMouseOver={() => setVisibleLabel(true)}
                    onMouseOut={() => setVisibleLabel(false)}
                    className={`new-card-container__button ${mainPage ? 'new-card-container__button_save-articles' : 'new-card-container__button_delete-articles'}`}
                ></button>
            </div>
            <div className="new-card-container__main">
                <label className="new-card-container__date">{date}</label>
                <h2 className="new-card-container__title">{title}</h2>
                <p className="new-card-container__article">{article}</p>
                <label className="new-card-container__source-of-information">{sourceOfInformation}</label>
            </div>
        </div>
    );
  }
  
  export default Card;