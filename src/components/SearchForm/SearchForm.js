import './SearchForm.css';
import React from 'react';

function SearchForm({searchNews}) {
    const [news, setNews] = React.useState('');

    const onChangeNews = (e) => {
        setNews(e.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        searchNews(news);
    }
    
    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input className="search-form__input" placeholder="Еще не ввел текст" name="news" onChange={onChangeNews}></input>
            <input className="search-form__button" type="submit" value="Искать"/>
        </form>
    );
  }
  
  export default SearchForm;