import './Form.css';
import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import workingWithUser from '../../utils/workingWithUser/workingWithUser';

function Form(props) {

    const { status, setLoggedIn, setStatus} = props;
    const [ disabled, setDisabled ] = React.useState(true);
    const [ valueEmail, setValueEmail ] = React.useState('');
    const [ valuePassword, setValuePassword ] = React.useState('');
    const [ valueName, setValueName ] = React.useState('');
    const [ errorAll, setErrorAll ] = React.useState({
        status: false,
        error: ''
    });

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(valueEmail !== '' && valuePassword !== '' && valueName !== ''){
            workingWithUser
                .registerUser({
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
        }else{
            workingWithUser
                .authorization({
                    email: valueEmail,
                    password: valuePassword
                })
                .then((res) => {
                    console.log('res', res);
                    if(res){
                        setLoggedIn(true);
                    }else{
                    console.log('Ошибка, данных нет', res)
                    }
                })
                .catch((error) => console.log('Ошибка при первичной загрузке данных пользователя', error));
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