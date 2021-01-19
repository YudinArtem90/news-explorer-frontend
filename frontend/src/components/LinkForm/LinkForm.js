import './LinkForm.css';
import React from 'react';

function LinkForm({setStatus, status}) {

    const onClickLink = () => {
        const statusLink = status === 'authorization' ? 'registration' : 'authorization';
        setStatus(statusLink);
    }

    return (
        <p className="container-form__link" onClick={onClickLink}>
            {status === 'authorization' ? 'Зарегистрироваться': 'Войти'}
        </p>
    );
  }
  
  export default LinkForm;