import './LinkForm.css';
import React from 'react';

function LinkForm({setStatus, status}) {

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <p className="container-form__link" onClick={() => setStatus(status === 'authorization' ? 'registration' : 'authorization')}>{status === 'authorization' ? 'Зарегистрироваться': 'Войти'}</p>
    );
  }
  
  export default LinkForm;