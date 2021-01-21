import React from 'react';
import ContainerEmail from '../ContainerEmail/ContainerEmail';
import ContainerPassword from '../ContainerPassword/ContainerPassword';

function Login({setDisabled, valueEmail, valuePassword, setValueEmail, setValuePassword}){

    const [ errorEmail, setErrorEmail ] = React.useState(false);
    const [ errorPassword, setErrorPassword ] = React.useState(false);

    React.useEffect(() => {
        validationAll();
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        errorEmail, 
        errorPassword
    ]);

    const validationAll = () => {
        if(valuePassword !== '' && valueEmail !== ''){
            if(!errorEmail && !errorPassword){
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
           
        </>
    );
}

export default Login;