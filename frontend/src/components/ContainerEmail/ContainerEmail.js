import React from 'react';
import { email } from '../../utils/validation/validation';

function ContainerEmail({setErrorEmail, errorEmail, setValueEmail, valueEmail}){

    const emailCardRef = React.useRef();

    const validationEmail = () => {
        const value = emailCardRef.current.value;
        setValueEmail(value);
        email(value)
            .then((e) => {
                setErrorEmail(false);
            })
            .catch(function (error) {
                setErrorEmail(true);
            });
    }

    return(
        <div className="form__container-input">
            <label className="form__label">Email</label>
            <input 
                className="form__input"
                type="email" 
                name="emailPerson" 
                onChange={validationEmail}
                required 
                ref={emailCardRef}
                value={valueEmail}
                placeholder="Введите почту"
            ></input>
            {
                errorEmail ? <span className="form__error-input">Не правильный формат e-mail</span> : null
            }
        </div>
    );
}

export default ContainerEmail;