import './SearchForm.css';

function SearchForm({searchNews}) {
    return (
        <form className="search-form" onSubmit={searchNews}>
            <input className="search-form__input" placeholder="Еще не ввел текст"></input>
            {/* <button className="search-form__button" onClick={searchNews}>Искать</button> */}
            <input className="search-form__button" type="submit" value="Искать" />
        </form>
    );
  }
  
  export default SearchForm;