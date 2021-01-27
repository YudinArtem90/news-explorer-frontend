import './SearchContainer.css';
import SearchForm from '../SearchForm/SearchForm';

function SearchContainer(props) {

    return (
        <div className="search-container">
            <div className="search-container__info-text">
                <h1 className="search-container__header-text">Что творится в мире?</h1>
                <p className="search-container__header-subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            </div>
            <SearchForm {...props}/>
        </div>
    );
  }
  
  export default SearchContainer;