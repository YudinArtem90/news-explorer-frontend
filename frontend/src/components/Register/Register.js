import React from 'react';
import ContainerEmail from '../ContainerEmail/ContainerEmail';
import ContainerPassword from '../ContainerPassword/ContainerPassword';
import ContainerName from '../ContainerName/ContainerName';

function Register(props){

    const {setDisabled, valueEmail, valuePassword, valueName} = props;
    const [ errorEmail, setErrorEmail ] = React.useState(false);
    const [ errorPassword, setErrorPassword ] = React.useState(false);
    const [ errorName, setErrorName ] = React.useState(false);

    React.useEffect(() => {
        validationAll();
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        errorEmail, 
        errorPassword,
        errorName,
        valueEmail, 
        valuePassword, 
        valueName
    ]);

    const validationAll = () => {
        if(valuePassword !== '' && valueEmail !== '' && valueName !== ''){
            if(!errorEmail && !errorPassword && !errorName){
                setDisabled(false);
            }else{
                setDisabled(true);
            }
        }else{
            setDisabled(true);
        }
    }

    return(
        <>
        <ContainerEmail 
            setErrorEmail={setErrorEmail} 
            errorEmail={errorEmail} 
            {...props}
        />
        <ContainerPassword 
            setErrorPassword={setErrorPassword} 
            errorPassword={errorPassword} 
            {...props}
        />
       <ContainerName
           setErrorName={setErrorName}
           errorName={errorName}
           {...props}
       />
    </>
    );
}

export default Register;