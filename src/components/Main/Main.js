import './Main.css';

function Main() {
    return (
      <div className="main">
        <h1 className="main__header-text">Что творится в мире?</h1>
        <p className="main__header-subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <div>
          <input></input>
          <button className="main__search-for-news"></button>
        </div>
      </div>
    );
  }
  
  export default Main;