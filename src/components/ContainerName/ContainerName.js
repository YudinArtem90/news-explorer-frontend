// ContainerName
import React from 'react';
import { name } from '../../utils/validation/validation';

function ContainerName({setErrorName, errorName, setValueName}){

    const nameCardRef = React.useRef();
    
    const validationName = () => {
        const value = nameCardRef.current.value;
        setValueName(value);
        name(value)
            .then((e) => {
                setErrorName(false);
            })
            .catch(function (error) {
                setErrorName(true);
            });
    }

    return(
        <div className="form__container-input">
            <label className="form__label">Имя</label>
            <input 
                className="form__input"
                type="text" 
                name="namePerson" 
                onChange={validationName}
                required 
                ref={nameCardRef}
                placeholder="Введите своё имя"
            ></input>
            {
                errorName ? <span className="form__error-input">Имя должно быть более 2-х символов</span> : null
            }
        </div>
    );
}

export default ContainerName;