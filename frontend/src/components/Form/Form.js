import './Form.css';
import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Form(props) {

    const { 
        statusForm, 
        onRegister,
        onLogin,
        disabled,
        setDisabled, 
        valueEmail, 
        setValueEmail, 
        valuePassword, 
        setValuePassword, 
        valueName, 
        setValueName, 
        errorAll
    } = props;

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(valueEmail !== '' && valuePassword !== '' && valueName !== ''){
            onRegister();
        }else{
            onLogin();
        }
    }

    React.useEffect(() => {
        props.clearForm();
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [statusForm.status]);

    return (
        <div className="container-form">
            <h2 className="container-form__title">{statusForm.status === 'authorization' ? 'Войти' : 'Регистрация'}</h2>
            <form className="form" onSubmit={onSubmitForm}>

            {
                statusForm.status === 'authorization' ?
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
            >{statusForm.status === 'authorization' ? 'Войти' : 'Зарегистрироваться'}</button>
                
            </form>
        </div>
    );
  }
  
  export default Form;