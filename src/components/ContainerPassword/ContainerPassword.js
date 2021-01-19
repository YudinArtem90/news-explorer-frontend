import React from 'react';
import { password } from '../../utils/validation/validation';

function ContainerPassword({setErrorPassword, errorPassword, setValuePassword}){

    const passwordCardRef = React.useRef();
    
    const validationPassword = () => {
        const value = passwordCardRef.current.value;
        setValuePassword(value);
        password(value)
            .then((e) => {
                setErrorPassword(false);
            })
            .catch(function (error) {
                setErrorPassword(true);
            });
    }

    return(
        <div className="form__container-input">
            <label className="form__label">Пароль</label>
            <input 
                className="form__input"
                name="passwordPerson" 
                onChange={validationPassword}
                required 
                ref={passwordCardRef}
                type="password" 
                placeholder="Введите пароль"
            ></input>
            {
                errorPassword ? <span className="form__error-input">Пароль должен быть более 6 символов</span> : null
            }
        </div>
    );
}

export default ContainerPassword;