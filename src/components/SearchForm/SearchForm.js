import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search-form">
            <input className="search-form__input" placeholder="Еще не ввел текст"></input>
            <button className="search-form__button">Искать</button>
        </form>
    );
  }
  
  export default SearchForm;