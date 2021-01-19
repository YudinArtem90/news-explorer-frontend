import './Form.css';
import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Form(props) {

    const { title, labelButton, component: LinkForm, status} = props;
    const [ disabled, setDisabled ] = React.useState(true);

    return (
        <div className="container-form">
            <h2 className="container-form__title">{title}</h2>
            <form className="form">

            {
              status === 'authorization' ?
                <Login setDisabled={setDisabled} /> : 
                <Register setDisabled={setDisabled} />
            }

            <span className="form__error-form">Такой пользователь уже есть</span>
            <button 
                className={`form__button ${disabled ? 'form__button_theme_disable' : 'form__button_theme_active'}`}
                type="submit" 
                disabled={`${!disabled ? '' : 'disabled'}`}
            >{labelButton}</button>
                
            </form>
            <div className="container-form__info">или <LinkForm {...props}/></div>
        </div>
    );
  }
  
  export default Form;