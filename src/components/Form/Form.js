import './Form.css';
import { Link } from 'react-router-dom';
import React from 'react';
import * as yup from 'yup';

function Form({email, password, name, title, labelButton, linkName}) {

    const nameCardRef = React.useRef();
    const emailCardRef = React.useRef();
    const passwordCardRef = React.useRef();

    const [ desabled, setDesabled ] = React.useState(true);
    const [ errorEmail, setErrorEmail ] = React.useState(false);
    const [ errorPassword, setErrorPassword ] = React.useState(false);
    const [ errorName, setErrorName ] = React.useState(false);

    const validationEmail = (event) => {
        let schema = yup.object({
            email: yup.string().email().required()
          });

        schema.validate({ 
            email: emailCardRef.current.value
        })
        .then((e) => {
            setErrorEmail(false);
            validationAll();
        })
        .catch(function (error) {
            setErrorEmail(true);
            validationAll(); 
          });
    }

    const validationPassword = (event) => {
        let schema = yup.object({
            password: yup.string().min(6).max(30).matches(/^[A-Za-z0-9]+$/g).required()
          });

        schema.validate({ 
            password: passwordCardRef.current.value 
        })
        .then((e) => {
            setErrorPassword(false);
            validationAll();
        })
        .catch(function (error) {
            setErrorPassword(true);
            validationAll(); 
          });
    }

    const validationName = (event) => {
        let schema = yup.object({
            name : yup.string().min(2).max(30).required()
          });

        schema.validate({ 
            name: nameCardRef.current.value
        })
        .then((e) => {
            setErrorName(false);
            validationAll();
        })
        .catch(function (error) {
            setErrorName(true); 
            validationAll();
          });
    }

    const validationAll = () => {
        if(passwordCardRef.current.value !== ''&& nameCardRef.current.value !== '' && emailCardRef.current.value !== ''){
            if(!errorEmail && !errorPassword && !errorName){
                setDesabled(false);
            }else{
                setDesabled(true);
            }
        }else{
            setDesabled(true);
        }
    }

    return (
        <div className="container-form">
            <h2 className="container-form__title">{title}</h2>
            <form className="form">
                <>
                {
                    email && 
                    <div className="form__container-input">
                        <label className="form__label">Email</label>
                        <input 
                            className="form__input"
                            type="text" 
                            name="emailPerson" 
                            onChange={validationEmail}
                            required 
                            ref={emailCardRef}
                        ></input>
                        {
                            errorEmail ? <span className="form__error-input">Не правильный формат e-mail</span> : null
                        }
                    </div>
                }
                {
                    password && 
                    <div className="form__container-input">
                        <label className="form__label">Пароль</label>
                        <input 
                            className="form__input"
                            name="passwordPerson" 
                            onChange={validationPassword}
                            required 
                            ref={passwordCardRef}
                            type="password" 
                        ></input>
                        {
                            errorPassword ? <span className="form__error-input">Пароль должен быть более 6 символов</span> : null
                        }
                    </div>
                }

                {
                    name && 
                    <div className="form__container-input">
                        <label className="form__label">Имя</label>
                        <input 
                            className="form__input"
                            type="text" 
                            name="namePerson" 
                            onChange={validationName}
                            required 
                            ref={nameCardRef}
                        ></input>
                        {
                            errorName ? <span className="form__error-input">Имя должно быть более 2-х символов</span> : null
                        }
                    </div>
                }

                    <span className="form__error-form">Такой пользователь уже есть</span>
                    <button 
                        className={`form__button ${desabled ? 'form__button_theme_disable' : 'form__button_theme_active'}`}
                        type="submit" 
                        disabled={`${!desabled ? '' : 'disabled'}`}
                    >{labelButton}</button>
                </>
            </form>
            <p className="container-form__info">или <Link className="container-form__link" to="/sign-in">{linkName}</Link></p>
        </div>
    );
  }
  
  export default Form;