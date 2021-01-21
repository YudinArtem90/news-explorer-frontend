import './Form.css';
import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import workingWithToken from '../../utils/workingWithToken/WorkingWithToken';
import MainApi from '../../utils/api/MainApi';

function Form(props) {

    const { status, setStatus, setCurrentUser, closeModal} = props;
    const [ disabled, setDisabled ] = React.useState(true);
    const [ valueEmail, setValueEmail ] = React.useState('');
    const [ valuePassword, setValuePassword ] = React.useState('');
    const [ valueName, setValueName ] = React.useState('');
    const [ errorAll, setErrorAll ] = React.useState({
        status: false,
        error: ''
    });

    const getUser = () => {
        MainApi
            .getUser()
            .then((user) => {
                if(user){
                    setCurrentUser({
                        loggedIn : true,
                        email: user.email,
                        name: user.name
                    });
                    closeModal();
                }else{
                    setErrorAll({status: true, error: 'Ошибка при запросе данных о пользователе.'});
                }
            })
            .catch((error) => setErrorAll({status: true, error: 'Ошибка при запросе данных о пользователе.'}));
    }

    const onRegister = () => { 
        MainApi
            .registration({
                email: valueEmail,
                password: valuePassword,
                name: valueName
            })
            .then((res) => {
                if(res.statusCode !== 400){
                    setStatus(res.message);
                }else{
                    setErrorAll({status: true, error: res.validation.body.message});
                }
            })
            .catch((error) => {
                if(typeof error.validation !== 'object'){
                    setErrorAll({status: true, error: error.message});
                }else{
                    setErrorAll({status: true, error: error.validation.body.message});
                }
            });
    }

    const onLogin  = () => { 
        MainApi
            .authorization({
                email: valueEmail,
                password: valuePassword
            })
            .then((res) => {
                console.log('res', res);
                if(res){
                    if(workingWithToken.saveToken(res.token)){
                        getUser();
                    }else{
                        setErrorAll({status: true, error: 'Ошибка token не сохранился.'});
                    }
                }else{
                    setErrorAll({status: true, error: 'Ошибка'});
                }
            })
            .catch((error) => setErrorAll({status: true, error: error.message}));
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(valueEmail !== '' && valuePassword !== '' && valueName !== ''){
            onRegister();
        }else{
            onLogin();
        }
    }
    
    return (
        <div className="container-form">
            <h2 className="container-form__title">{status === 'authorization' ? 'Войти' : 'Регистрация'}</h2>
            <form className="form" onSubmit={onSubmitForm}>

            {
              status === 'authorization' ?
                <Login 
                    setDisabled={setDisabled} 
                    valueEmail={valueEmail} 
                    valuePassword={valuePassword} 
                    setValueEmail={setValueEmail} 
                    setValuePassword={setValuePassword}
                /> : 
                <Register 
                    setDisabled={setDisabled}
                    valueEmail={valueEmail} 
                    valuePassword={valuePassword} 
                    valueName={valueName}
                    setValueEmail={setValueEmail} 
                    setValuePassword={setValuePassword}
                    setValueName={setValueName}
                />
            }

            {errorAll.status ? <span className="form__error-form">{errorAll.error}</span> : null}
            <button 
                className={`form__button ${disabled ? 'form__button_theme_disable' : 'form__button_theme_active'}`}
                type="submit" 
                disabled={`${!disabled ? '' : 'disabled'}`}
            >{status === 'authorization' ? 'Войти' : 'Зарегистрироваться'}</button>
                
            </form>
        </div>
    );
  }
  
  export default Form;