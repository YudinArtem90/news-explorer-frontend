import './LinkForm.css';
import React from 'react';

function LinkForm({setStatus, status, setErrorAll}) {

    const onClickLink = () => {
        setErrorAll({status: false, error: ''});
        const statusLink = status === 'authorization' ? 'registration' : 'authorization';
        setStatus({
            status: statusLink,
            message: ''
        });
    }

    return (
        <p className="popup__link" onClick={onClickLink}>
            {status === 'authorization' ? 'Зарегистрироваться': 'Войти'}
        </p>
    );
  }
  
  export default LinkForm;