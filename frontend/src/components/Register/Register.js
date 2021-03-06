import React from 'react';
import ContainerEmail from '../ContainerEmail/ContainerEmail';
import ContainerPassword from '../ContainerPassword/ContainerPassword';
import ContainerName from '../ContainerName/ContainerName';

function Register(props){

    const {setDisabled, valueEmail, valuePassword, valueName, setValueEmail, setValuePassword, setValueName} = props;
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
        errorName
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
            setValueEmail={setValueEmail}
        />
        <ContainerPassword 
            setErrorPassword={setErrorPassword} 
            errorPassword={errorPassword} 
            setValuePassword={setValuePassword}
        />
       <ContainerName
           setErrorName={setErrorName}
           errorName={errorName}
           setValueName={setValueName}
       />
    </>
    );
}

export default Register;