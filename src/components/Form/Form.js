import './Form.css';
import { Link } from 'react-router-dom';

function Form() {
    return (
        <div className="container-form">
            <h2 className="container-form__title">Регистрация</h2>
            <form className="form">
            <>
                <div className="form__container-input">
                    <label className="form__label">sdfsfds</label>
                    <input className="form__input"></input>
                    <span className="form__error-input">sfdsdfsd</span>
                </div>
                <div className="form__container-input">
                    <label className="form__label">111111111111</label>
                    <input className="form__input"></input>
                </div>
                <span className="form__error-form">fffffgg</span>
                <button className="form__button">Зарегистрироваться</button>
            </>
            </form>
            <p className="container-form__info">или <Link className="container-form__link" to="/sign-in">Зарегистрироваться</Link></p>
        </div>
    );
  }
  
  export default Form;