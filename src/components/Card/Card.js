import './Card.css';

function Card() {
    return (
        <div className="new-card-container">
            <div className="new-card-container__header">
                <label className="new-card-container__inform-label">Войдите, чтобы сохранять статьи</label>
                <button className="new-card-container__button new-card-container__button_save-articles"></button>
            </div>
            <div className="new-card-container__main">
                <label className="new-card-container__date">2 августа, 2019</label>
                <h2 className="new-card-container__title">Национальное достояние – парки</h2>
                <p className="new-card-container__article">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. dfgdf dfg dfg df gdfg dfgfdgdfgdfgdfgdfgdfgg dfg dfg d dfg dfg </p>
                <label className="new-card-container__source-of-information">Лента.ру</label>
            </div>
        </div>
    );
  }
  
  export default Card;